import UserModel from "../models/User";
import AuthService from "../services/AuthService";
import AppError from "../exeptions/AppError";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";

class AuthController {
  @TryCatchErrorDecorator
  async signin(req, res) {
    const user = await UserModel.findOne({ email: req.body.email });
    const checkPassword = await AuthService.checkPassword(
      req.body.password,
      user.password
    );

    if (!checkPassword) {
      throw new AppError();
    }

    res.json(user);
  }

  async signup(req, res, next) {
    res.json({
      action: "signup"
    });
  }

  async restore(req, res, next) {
    res.json({
      action: "restore"
    });
  }

  async refreshTokens(req, res, next) {
    res.json({
      action: "refreshTokens"
    });
  }
}

export default new AuthController();
