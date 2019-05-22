import UserModel from "../models/User";
import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";

class UsersController {
  @TryCatchErrorDecorator
  static async index(req, res) {
    const users = await UserModel.find().select("_id name email");

    res.json(users);
  }
}

export default UsersController;
