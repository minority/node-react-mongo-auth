import UserModel from "../models/User";
import AuthService from "../services/AuthService";
import ClientError from "../exeptions/ClientError";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";
import TokenService from "../services/TokenService";

class AuthController {
  @TryCatchErrorDecorator
  async signin(req, res) {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      throw new ClientError("Incorrect email or password", 401);
    }

    const checkPassword = await AuthService.checkPassword(
      req.body.password,
      user.password
    );

    if (!checkPassword) {
      throw new ClientError("Incorrect email or password", 401);
    }

    const accessToken = await TokenService.createAccessToken(user);
    const refreshToken = await TokenService.createRefreshToken(user);

    res.json({ accessToken, refreshToken });
  }

  @TryCatchErrorDecorator
  async signup(req, res) {
    const password = AuthService.generatePassword();
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password,
      token: "test"
    });

    /* send email activate */

    await user.save();

    res.json({ status: "success" });
  }

  @TryCatchErrorDecorator
  async logout(req, res, next) {
    res.json({
      action: "logout"
    });
  }

  @TryCatchErrorDecorator
  async restore(req, res, next) {
    res.json({
      action: "restore"
    });
  }

  @TryCatchErrorDecorator
  async refreshTokens(req, res, next) {
    res.json({
      action: "refreshTokens"
    });
  }
}

export default new AuthController();
