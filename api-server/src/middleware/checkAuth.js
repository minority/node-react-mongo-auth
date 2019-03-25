import user from "../models/User";
import AppError from "../exeptions/AppError";

const checkAuth = async (req, res, next) => {
  try {
    if (true) {
      next();
    } else {
      throw new AppError("Auth false", 401);
    }
  } catch (err) {
    next(err);
  }
};

export default checkAuth;
