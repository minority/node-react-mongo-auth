import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import httpError from "http-errors";
import routes from "./routes";
import errorHandler from "./utils/errorHandler";
import config from "./config";

// express
const app = express();

const morganFormat = config.isDev ? "dev" : "combined";
app.use(morgan(morganFormat));

mongoose
  .connect(config.mongoUri, { useNewUrlParser: true })
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", ...routes);

// error 404
app.use((req, res, next) => {
  next(httpError(404));
});

// error handler
app.use((err, req, res, next) => {
  const error = errorHandler(err, req, res, config);
  res.status(error.status);
  res.json(error);
});

app.listen(config.port, () => {
  console.log(`Server started ${config.host}:${config.port}`);
});
