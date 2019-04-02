import ValidateService from "../../services/ValidateService";
import TryCatchErrorDecorator from "../../decorators/TryCatchErrorDecorator";
import ClientError from "../../exeptions/ClientError";
import TokenService from "../../services/TokenService";

class AuthValidator {
  @TryCatchErrorDecorator
  static async signin(req, res, next) {
    const schema = {
      type: "object",
      required: ["email", "password"],
      properties: {
        email: {
          type: "string",
          format: "email",
          errorMessage: {
            format: "Field 'email' incorrect",
            type: "Field 'email' should be a string"
          }
        },
        password: {
          type: "string",
          errorMessage: {
            type: "Field 'password' should be a string"
          }
        }
      }
    };

    await ValidateService.validate(req.body, schema);
    next();
  }

  @TryCatchErrorDecorator
  static async signup(req, res, next) {
    const schema = {
      type: "object",
      required: ["email", "name"],
      properties: {
        email: {
          type: "string",
          format: "email",
          errorMessage: {
            format: "Field 'email' incorrect",
            type: "Field 'email' should be a string"
          }
        },
        name: {
          type: "string",
          minLength: 2,
          maxLength: 30,
          pattern: "^[a-zA-Z0-9_ ]*$",
          errorMessage: {
            pattern: "Field 'name' can contain only letters and spaces",
            type: "Field 'name' should be a string"
          }
        }
      }
    };

    await ValidateService.validate(req.body, schema);
    next();
  }

  @TryCatchErrorDecorator
  static async refreshTokens(req, res, next) {
    const schema = {
      type: "object",
      required: ["refreshToken"],
      properties: {
        refreshToken: {
          type: "string",
          pattern: "^(.*)::(.*)$",
          errorMessage: {
            type: "Field 'refreshToken' should be a string",
            pattern: "Incorrect format 'refreshToken'"
          }
        }
      }
    };

    await ValidateService.validate(req.body, schema);
    next();
  }

  @TryCatchErrorDecorator
  static async restorePassword(req, res, next) {
    const schema = {
      type: "object",
      required: ["email"],
      properties: {
        email: {
          type: "string",
          format: "email",
          errorMessage: {
            format: "Field 'email' incorrect",
            type: "Field 'email' should be a string"
          }
        }
      }
    };

    await ValidateService.validate(req.body, schema);
    next();
  }

  @TryCatchErrorDecorator
  static async confirmRestorePassword(req, res, next) {
    const schema = {
      type: "object",
      required: ["token"],
      properties: {
        token: {
          type: "string",
          errorMessage: {
            type: "Field 'name' should be a string"
          }
        }
      }
    };

    await ValidateService.validate(req.body, schema);
    next();
  }

  @TryCatchErrorDecorator
  static async checkAuth(req, res, next) {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];

      if (!token) {
        throw new ClientError("Access token not found in request", 400);
      }

      const verifyData = await TokenService.verifyAccessToken(token);

      if (!verifyData) {
        throw new ClientError("Refresh token invalid or expired", 401);
      }

      req.userId = verifyData.id;
      return next();
    }

    throw new ClientError("Unauthorized", 401);
  }
}

export default AuthValidator;
