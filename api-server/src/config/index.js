import dotenv from "dotenv";
import path from "path";

const root = path.join.bind(this, __dirname, "../../");
dotenv.config({ path: root(".env") });

if (!process.env.HOST || !process.env.PORT || !process.env.NODE_ENV) {
  throw new Error("Can`t find .env config varibles for work app");
}

const isDev = process.env.NODE_ENV !== "production";
const isProd = !isDev;

export default {
  host: process.env.HOST,
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  isDev,
  isProd
};
