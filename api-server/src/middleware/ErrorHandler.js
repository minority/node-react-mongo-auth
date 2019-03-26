import httpError from "http-errors";
import ValidationError from "../exeptions/ValidationError";
import logger from "../utils/logger";

export default function(err, req, res, next) {
  const status = err.status || 500;
  const httpErrorName = httpError(status);
  const errorMessage = err.message || httpErrorName.message || "Unknown error";
  const message =
    process.env.NODE_ENV !== "production"
      ? errorMessage
      : httpErrorName.message;

  const response = { message, status };
  if (err instanceof ValidationError) {
    Object.assign(response, { errorValidation: err.validationErrors });
  }

  logger.error(errorMessage, { url: req.originalUrl, method: req.method });

  res.status(status);
  res.json(response);
}
