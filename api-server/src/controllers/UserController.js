import UserModel from "../models/User";
import AppError from "../exeptions/AppError";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";

class UserController {
  @TryCatchErrorDecorator
  async index(req, res) {
    const users = await UserModel.find(-1);

    res.json(users);
  }

  @TryCatchErrorDecorator
  async create(req, res) {
    const user = new UserModel({
      name: "User 1",
      email: "test2",
      password: "testtest1",
      token: "test"
    });

    await user.save();

    res.json({ status: "success" });
  }

  @TryCatchErrorDecorator
  async clear(req, res) {
    await UserModel.remove();

    res.json({ status: "success" });
  }
}

export default new UserController();
