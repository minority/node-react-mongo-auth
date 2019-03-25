import httpError from "http-errors";
import { ValidationError } from "express-json-validator-middleware";
import logger from "../utils/logger";

export default function(err, req, res, next) {
  if (err instanceof ValidationError) {
    console.log(err.validationErrors);
  }

  const status = err.status || 500;
  const httpErrorName = httpError(status);
  const errorMessage = err.message || "Unknown error";
  const message =
    process.env.NODE_ENV !== "production"
      ? errorMessage
      : httpErrorName.message;

  logger.error(errorMessage, { url: req.originalUrl, method: req.method });

  res.status(status);
  res.json({ message, status });
}
