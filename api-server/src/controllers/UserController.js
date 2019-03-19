import UserModel from "../models/User";

class UserController {
  index(req, res) {
    UserModel.find()
      .then(users => res.json(users))
      .catch(error => res.send(error));
  }

  create(req, res) {
    const user = new UserModel({
      name: "User 1",
      email: "test",
      password: "test",
      token: "test"
    });

    user
      .save()
      .then(() => res.json({ status: "success" }))
      .catch(error => res.send(error));
  }

  clear(req, res) {
    UserModel.remove()
      .then(() => res.json({ status: "success" }))
      .catch(error => res.send(error));
  }
}

export default new UserController();
