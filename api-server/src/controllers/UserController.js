import UserModel from "../models/User";
import AppError from "../exeptions/AppError";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";

class UserController {
  @TryCatchErrorDecorator
  async index(req, res) {
    const users = await UserModel.find();

    res.json(users);
  }

  @TryCatchErrorDecorator
  async clear(req, res) {
    await UserModel.remove();

    res.json({ status: "success" });
  }
}

export default new UserController();
