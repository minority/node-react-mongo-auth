import bcrypt from "bcryptjs";
import AppError from "../exeptions/AppError";

const checkPassword = async (password, passwordHash) => {
  try {
    return await bcrypt.compare(password, passwordHash);
  } catch (err) {
    throw new AppError(err.message);
  }
};

const hashPassword = async password => {
  try {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  } catch (err) {
    throw new AppError(err.message);
  }
};

export default {
  checkPassword,
  hashPassword
};
