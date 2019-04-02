import UserModel from "../models/User";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";

class UserController {
  @TryCatchErrorDecorator
  static async index(req, res) {
    const users = await UserModel.find();

    res.json(users);
  }

  @TryCatchErrorDecorator
  static async clear(req, res) {
    await UserModel.remove();

    res.json({ status: "success" });
  }
}

export default UserController;
