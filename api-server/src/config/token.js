import dotenv from "dotenv";
import path from "path";

const root = path.join.bind(this, __dirname, "../../");
dotenv.config({ path: root(".env") });

const secretAccess = process.env.SECRET_TOKEN_ACCESS;
const expireAccess = process.env.EXPIRE_TOKEN_ACCESS;

const secretRefresh = process.env.SECRET_TOKEN_REFRESH;
const expireRefresh = process.env.EXPIRE_TOKEN_REFRESH;

const secretRestore = process.env.SECRET_TOKEN_RESTORE_PASSWORD;
const expireRestore = process.env.EXPIRE_TOKEN_RESTORE_PASSWORD;

const countTokenLimit = process.env.TOKEN_LIMIT_COUNT_DIVICE;

export default {
  secretAccess,
  expireAccess,
  secretRefresh,
  expireRefresh,
  countTokenLimit,
  secretRestore,
  expireRestore
};
