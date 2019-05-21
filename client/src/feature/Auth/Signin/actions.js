import { api } from "../../../helpers/api";
import { setAuthUserData, removeAuthUserData } from "../../../helpers/auth";

export const SIGNIN_REQUEST_PROCESS = "SIGNIN_REQUEST_PROCESS";
export const SIGNIN_REQUEST_ERROR = "SIGNIN_REQUEST_ERROR";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export const REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";

export const refreshTokenError = error => ({
  type: REFRESH_TOKEN_ERROR,
  error
});

export const refreshTokenSuccess = data => ({
  type: REFRESH_TOKEN_SUCCESS,
  data
});

export const signinRequestProcess = () => ({ type: SIGNIN_REQUEST_PROCESS });

export const signinSuccess = data => ({
  type: SIGNIN_SUCCESS,
  data
});

export const signinRequestError = error => ({
  type: SIGNIN_REQUEST_ERROR,
  error
});

export const logout = () => ({ type: LOGOUT });

export const signinRequest = formData => async dispatch => {
  try {
    dispatch(signinRequestProcess());

    const data = await api("post", "auth/signin", formData);

    setAuthUserData(data);

    dispatch(signinSuccess(data));
  } catch (error) {
    dispatch(signinRequestError(error.response ? error.response.data : error));
  }
};

export const logoutHandler = () => dispatch => {
  removeAuthUserData();
  dispatch(logout());
};

export const refreshTokenRequest = refreshToken => async (
  dispatch,
  getState
) => {
  try {
    const data = await api("post", "auth/refresh-tokens", {
      refreshToken
    });

    const state = getState();
    setAuthUserData({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      user: state.auth.signin.user
    });

    dispatch(refreshTokenSuccess(data));
  } catch (error) {
    dispatch(refreshTokenError(error.response ? error.response.data : error));
    removeAuthUserData();
  }
};
