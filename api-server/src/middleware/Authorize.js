import TryCatchErrorDecorator from "../decorators/TryCatchErrorDecorator";
import ClientError from "../exeptions/ClientError";
import TokenService from "../services/TokenService";

class Authorize {
  @TryCatchErrorDecorator
  static async check(req, res, next) {
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

export default Authorize;
