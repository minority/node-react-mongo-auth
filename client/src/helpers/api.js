import axios from "axios";
import config from "../config";
import { getAuthUserData } from "./auth";

const axiosInstace = axios.create({
  baseURL: config.API_BASE_URL,
  timeout: 20000
});

const authUser = getAuthUserData();
if (authUser) {
  axiosInstace.defaults.headers.common["Authorization"] = `Bearer ${
    authUser.accessToken
  }`;
}

export const api = (requestType, url, payload) => {
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
