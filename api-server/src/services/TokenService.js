import jwt from "jsonwebtoken";
import mongoose from "mongoose";
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

const createAccessToken = async user => {
  try {
    const payload = {
      id: user._id
    };

    const options = {
      algorithm: "HS512",
      subject: user._id.toString(),
      expiresIn: config.expireAccess
    };

    const token = await sign(payload, config.secretAccess, options);

    return token;
  } catch (err) {
    throw new AppError(err.message);
  }
};

const createRefreshToken = async user => {
  try {
    const payload = {
      id: user._id
    };

    const options = {
      algorithm: "HS512",
      subject: user._id.toString(),
      expiresIn: config.expireRefresh
    };

    const token = await sign(payload, config.secretRefresh, options);

    return token;
  } catch (err) {
    throw new AppError(err.message);
  }
};

const createRestorePasswordToken = async user => {
  try {
    const payload = {
      id: user._id
    };

    const options = {
      algorithm: "HS512",
      subject: user._id.toString(),
      expiresIn: config.expireRestore
    };

    const token = await sign(payload, config.secretRestore, options);

    return token;
  } catch (err) {
    throw new AppError(err.message);
  }
};

const removeRefreshTokenUser = async (user, token) => {
  try {
    const refreshTokenId = token.split("::")[0];

    const refreshTokensFiltered = user.refreshTokens.filter(refreshToken => {
      return refreshToken._id.toString() !== refreshTokenId.toString();
    });

    user.refreshTokens = refreshTokensFiltered;
    await user.save();

    return true;
  } catch (err) {
    throw new AppError(err.message);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const addRefreshTokenUser = async (user, token) => {
  try {
    /* token limit count restriction */

    if (user.refreshTokens.length >= config.countTokenLimit) {
      user.refreshTokens = [];
    }

    const objectId = mongoose.Types.ObjectId();
    user.refreshTokens.push({ _id: objectId, token });
    await user.save();

    return `${objectId}::${token}`;
  } catch (err) {
    throw new AppError(err.message);
  }
};

const verifyRefreshToken = async token => {
  try {
    const refreshTokenHash = token.split("::")[1];
    const data = await jwt.verify(refreshTokenHash, config.secretRefresh);

    return data;
  } catch (err) {
    return false;
  }
};

const verifyAccessToken = async token => {
  try {
    const data = await jwt.verify(token, config.secretAccess);

    return data;
  } catch (err) {
    return false;
  }
};

const verifyRestorePasswordToken = async token => {
  try {
    const data = await jwt.verify(token, config.secretRestore);

    return data;
  } catch (err) {
    return false;
  }
};

const checkRefreshTokenUser = async (user, token) => {
  try {
    const refreshTokenId = token.split("::")[0];

    const isValid = user.refreshTokens.find(
      refreshToken => refreshToken._id.toString() === refreshTokenId.toString()
    );

    return !!isValid;
  } catch (err) {
    throw new AppError(err.message);
  }
};

export default {
  sign,
  createAccessToken,
  createRefreshToken,
  addRefreshTokenUser,
  removeRefreshTokenUser,
  verifyRefreshToken,
  checkRefreshTokenUser,
  verifyAccessToken,
  createRestorePasswordToken,
  verifyRestorePasswordToken
};
