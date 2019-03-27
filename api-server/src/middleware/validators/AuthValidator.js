import ValidateService from "../../services/ValidateService";
import AppError from "../../exeptions/AppError";
import TryCatchErrorDecorator from "../../decorators/TryCatchErrorDecorator";

class AuthValidator {
  @TryCatchErrorDecorator
  async signin(req, res, next) {
    const schema = {
      type: "object",
      required: ["email", "password"],
      properties: {
        email: {
          type: "string",
          format: "email",
          errorMessage: {
            format: "Field 'email' incorrect"
          }
        },
        password: {
          type: "string"
        }
      }
    };

    await ValidateService.validate(req.body, schema);
    next();
  }

  @TryCatchErrorDecorator
  async signup(req, res, next) {
    const schema = {
      type: "object",
      required: ["email", "name"],
      properties: {
        email: {
          type: "string",
          format: "email",
          errorMessage: {
            format: "Field 'email' incorrect"
          }
        },
        name: {
          type: "string",
          minLength: 2,
          maxLength: 30,
          pattern: "^[a-zA-Z0-9_ ]*$",
          errorMessage: {
            pattern: "Field 'name' can contain only letters and spaces"
          }
        }
      }
    };

    await ValidateService.validate(req.body, schema);
    next();
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
