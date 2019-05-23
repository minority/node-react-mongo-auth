import { api } from "../../../helpers/api";

export const RESTORE_REQUEST_PROCESS = "RESTORE_REQUEST_PROCESS";
export const RESTORE_REQUEST_ERROR = "RESTORE_REQUEST_ERROR";
export const RESTORE_SUCCESS = "RESTORE_SUCCESS";

export const restoreRequestProcess = () => ({ type: RESTORE_REQUEST_PROCESS });

export const restoreSuccess = data => ({
  type: RESTORE_SUCCESS,
  data
});

export const restoreRequestError = error => ({
  type: RESTORE_REQUEST_ERROR,
  error
});

export const restorePasswordRequest = formData => async dispatch => {
  try {
    dispatch(restoreRequestProcess());

    const data = await api("post", "auth/restore-password", formData);

    dispatch(restoreSuccess(data));
  } catch (error) {
    dispatch(restoreRequestError(error.response ? error.response.data : error));
  }
};
