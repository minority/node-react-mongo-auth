import httpErrors from "http-errors";
import ValidationError from "../exeptions/ValidationError";
import ClientError from "../exeptions/ClientError";
import logger from "../utils/logger";

export default function(err, req, res, next) {
  const status = err.status || 500;
  const httpError = httpErrors(status);
  const errorMessage = err.message || httpError.message || "Unknown error";
  const clientMessage =
    process.env.NODE_ENV !== "production" ? errorMessage : httpError.message;

  const response = { code: status };

  if (err instanceof ValidationError) {
    Object.assign(response, { message: clientMessage });
    Object.assign(response, { errorValidation: err.validationErrors });
  } else if (err instanceof ClientError) {
    Object.assign(response, { message: errorMessage });
    logger.info(errorMessage, { url: req.originalUrl, method: req.method });
  } else {
    Object.assign(response, { message: clientMessage });
    logger.error(errorMessage, { url: req.originalUrl, method: req.method });
  }

  res.status(status);
  res.json(response);
}
