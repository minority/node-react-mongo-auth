import jwt from "jsonwebtoken";
import config from "../config/token";
import AppError from "../exeptions/AppError";

const sign = async (playload, secretToken, options) => {
  try {
    const token = await jwt.sign(playload, secretToken, options);
    return token;
  } catch (err) {
    throw new AppError(err.message);
  }
};

const signAccess = async user => {
  try {
    const payload = {
      id: user._id
    };

    const options = {
      algorithm: "HS512",
      subject: user._id,
      expiresIn: config.expireAccess
    };

    const token = await sign(payload, config.secretAccess, options);

    return token;
  } catch (err) {
    throw new AppError(err.message);
  }
};

const signRefresh = async user => {
  try {
    const payload = {
      id: user._id
    };

    const options = {
      algorithm: "HS512",
      subject: user._id,
      expiresIn: config.expireRefresh
    };

    const token = await sign(payload, config.secretRefresh, options);

    const timestamp = new Date().getTime();

    return `${timestamp}::${token}`;
  } catch (err) {
    throw new AppError(err.message);
  }
};

export default { sign, signAccess, signRefresh };
