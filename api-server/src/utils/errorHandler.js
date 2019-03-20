import httpError from "http-errors";
import logger from "./logger";

export default function(err, req, res, config) {
  const status = err.status || 500;
  const httpErrorName = httpError(status);
  const errorMessage = err.message || err.error.message || "Unknown error";
  const message = config.isDev ? errorMessage : httpErrorName.message;

  logger.error(errorMessage, { url: req.originalUrl, method: req.method });

  return { status, message };
}
