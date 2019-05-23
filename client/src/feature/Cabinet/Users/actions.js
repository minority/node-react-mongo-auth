import { api } from "../../../helpers/api";

export const USERS_REQUEST_PROCESS = "USERS_REQUEST_PROCESS";
export const USERS_REQUEST_ERROR = "USERS_REQUEST_ERROR";
export const USERS_REQUEST_SUCCESS = "USERS_REQUEST_SUCCESS";

export const usersRequestProcess = () => ({
  type: USERS_REQUEST_PROCESS
});

export const usersRequestSuccess = data => ({
  type: USERS_REQUEST_SUCCESS,
  data
});

export const usersRequestError = error => ({
  type: USERS_REQUEST_ERROR,
  error
});

export const usersFetchRequest = () => async dispatch => {
  try {
    dispatch(usersRequestProcess());

    const data = await api("get", "users");

    dispatch(usersRequestSuccess(data));
  } catch (error) {
    dispatch(usersRequestError(error.response ? error.response.data : error));
  }
};
