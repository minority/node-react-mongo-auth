import UserModel from "../models/User";
import AuthService from "../services/AuthService";
import ClientError from "../exeptions/ClientError";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";
import TokenService from "../services/TokenService";
import AppError from "../exeptions/AppError";
import MailService from "../services/MailService";

class AuthController {
  @TryCatchErrorDecorator
  async signin(req, res) {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      throw new ClientError("User not found", 404);
    }

    const checkPassword = await AuthService.checkPassword(
      req.body.password,
      user.password
    );

    if (!checkPassword) {
      throw new ClientError("Incorrect email or password", 401);
    }

    const accessToken = await TokenService.createAccessToken(user);
    const refreshTokenHash = await TokenService.createRefreshToken(user);
    const refreshToken = await TokenService.addRefreshTokenUser(
      user,
      refreshTokenHash
    );

    res.json({
      accessToken,
      refreshToken,
      user: {
        name: user.name,
        email: user.email
      }
    });
  }

  @TryCatchErrorDecorator
  async signup(req, res) {
    const isAlreadyUser = await UserModel.findOne({ email: req.body.email });
    if (isAlreadyUser) {
      throw new ClientError("This email is already registered", 409);
    }

    const password = AuthService.generatePassword(12);

    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: await AuthService.hashPassword(password)
    });

    await user.save();

    MailService.sendWithTemplate(
      {
        to: user.email,
        subject: "Thanks for registering, your password is inside"
      },
      {
        template: "singup",
        data: {
          email: user.email,
          password
        }
      }
    );

    res.json({ status: "success" });
  }

  @TryCatchErrorDecorator
  async refreshTokens(req, res) {
    const refreshTokenRequest = req.body.refreshToken;

    const verifyData = await TokenService.verifyRefreshToken(
      refreshTokenRequest
    );

    if (!verifyData) {
      throw new ClientError("Refresh token invalid or expired", 400);
    }

    const user = await UserModel.findOne({ _id: verifyData.id });

    const isValid = await TokenService.checkRefreshTokenUser(
      user,
      refreshTokenRequest
    );

    if (!isValid) {
      throw new ClientError("Refresh token invalid or expired", 400);
    }

    await TokenService.removeRefreshTokenUser(user, refreshTokenRequest);

    const accessToken = await TokenService.createAccessToken(user);
    const refreshTokenHash = await TokenService.createRefreshToken(user);
    const refreshToken = await TokenService.addRefreshTokenUser(
      user,
      refreshTokenHash
    );

    res.json({ accessToken, refreshToken });
  }

  @TryCatchErrorDecorator
  async logout(req, res, next) {
    const user = await UserModel.findOne({ _id: req.userId });
    if (!user) {
      throw new AppError("UserId not found in request", 401);
    }

    user.refreshTokens = [];
    await user.save();

    res.json({ status: "success" });
  }

  @TryCatchErrorDecorator
  async restore(req, res, next) {
    res.json({
      action: "restore"
    });
  }

  @TryCatchErrorDecorator
  async confirmation(req, res, next) {
    res.json({
      action: "confirmation"
    });
  }
}

export default new AuthController();
