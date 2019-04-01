import dotenv from "dotenv";
import path from "path";

const root = path.join.bind(this, __dirname, "../../");
dotenv.config({ path: root(".env") });

if (!process.env.HOST || !process.env.PORT) {
  throw new Error("Can`t find .env config varibles for work app");
}

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

export default {
  host: process.env.HOST,
  port: process.env.PORT,
  frontendHost: process.env.FRONTEND_HOST,
  mongoUri: process.env.MONGO_URI,
  isDev,
  isProd
};
