import { api } from "../../../helpers/api";

export const CONFIRM_RESTORE_REQUEST_PROCESS =
  "CONFIRM_RESTORE_REQUEST_PROCESS";
export const CONFIRM_RESTORE_REQUEST_ERROR = "CONFIRM_RESTORE_REQUEST_ERROR";
export const CONFIRM_RESTORE_SUCCESS = "CONFIRM_RESTORE_SUCCESS";

export const confirmRestoreRequestProcess = () => ({
  type: CONFIRM_RESTORE_REQUEST_PROCESS
});

export const confirmRestoreSuccess = data => ({
  type: CONFIRM_RESTORE_SUCCESS,
  data
});

export const confirmRestoreRequestError = error => ({
  type: CONFIRM_RESTORE_REQUEST_ERROR,
  error
});

export const confirmRestorePasswordRequest = token => async dispatch => {
  try {
    dispatch(confirmRestoreRequestProcess());

    const data = await api("post", "auth/confirm-restore-password", { token });

    dispatch(confirmRestoreSuccess(data));
  } catch (error) {
    dispatch(
      confirmRestoreRequestError(error.response ? error.response.data : error)
    );
  }
};
