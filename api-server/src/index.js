import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";

import config from "./config";

// express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", ...routes);

app.listen(config.port, () => {
  console.log(`Server started ${config.host}:${config.port}`);
});
