import dotenv from "dotenv";
import path from "path";

const root = path.join.bind(this, __dirname, "../../");
dotenv.config({ path: root(".env") });

if (!process.env.HOST || !process.env.PORT) {
  throw new Error("Can`t find .env config varibles");
}

export default {
  host: process.env.HOST,
  port: process.env.PORT
};
