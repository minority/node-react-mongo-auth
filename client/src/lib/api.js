import axios from "axios";
import config from "../config";

const axiosInstace = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 20000
});

const api = (requestType, url, payload) => {
  return new Promise((resolve, reject) => {
    axiosInstace[requestType](url, payload)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default api;
