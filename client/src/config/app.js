const common = {};

const dev = {
  LOGGER_ENABLE: true,
  API_BASE_URL: "http://localhost:3003/api/"
};

const prod = {
  LOGGER_ENABLE: false,
  API_BASE_URL: "production/api/"
};

const config = process.env.NODE_ENV === "production" ? prod : dev;

export default {
  ...common,
  ...config
};
