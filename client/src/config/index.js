const common = {};
const dev = {
  API_BASE_URL: "http://localhost:3003/api/"
};
const prod = {
  API_BASE_URL: "production/api/"
};

const config = process.env.APP_ENV === "production" ? prod : dev;

export default {
  ...common,
  ...config
};
