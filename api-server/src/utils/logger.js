import { createLogger, format, transports } from "winston";
import path from "path";

const root = path.join.bind(this, __dirname, "../../");

function formatParams(info) {
  const { timestamp, level, message, ...args } = info;
  const ts = timestamp.slice(0, 19).replace("T", " ");

  return `${ts} ${level}: ${message} ${
    Object.keys(args).length ? JSON.stringify(args, "", "") : ""
  }`;
}

const developmentFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf(formatParams)
);

const productionFormat = format.combine(
  format.timestamp(),
  format.align(),
  format.printf(formatParams)
);

let logger; //eslint-disable-line

if (process.env.NODE_ENV !== "production") {
  logger = createLogger({
    level: "debug",
    format: developmentFormat,
    transports: [new transports.Console()]
  });
} else {
  logger = createLogger({
    level: "info",
    format: productionFormat,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    transports: [
      new transports.File({ filename: root("logs/error.log"), level: "error" }),
      new transports.File({ filename: root("logs/combined.log") })
    ]
  });
}

export default logger;
