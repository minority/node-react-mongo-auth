import ValidateService from "../../services/ValidateService";
import AppError from "../../exeptions/AppError";

class AuthValidator {
  async signin(req, res, next) {
    const schema = {
      type: "object",
      required: ["email", "password"],
      properties: {
        email: {
          type: "string"
        },
        password: {
          type: "string"
        }
      }
    };

    try {
      await ValidateService.validate(req.body, schema);
    } catch (err) {
      next(err);
    }
  }

  async checkAuth(req, res, next) {
    try {
      throw new AppError("Auth false", 401);
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthValidator();
