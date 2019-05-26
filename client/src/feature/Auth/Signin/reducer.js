import {
  SIGNIN_REQUEST_PROCESS,
  SIGNIN_SUCCESS,
  SIGNIN_REQUEST_ERROR,
  LOGOUT
} from "./actions";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  isAuth: false,
  accessToken: "",
  refreshToken: "",
  user: {
    id: "",
    name: "",
    email: ""
  }
};

export const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case SIGNIN_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.data.user,
        accessToken: action.data.accessToken,
        refreshToken: action.data.refreshToken
      };
    case LOGOUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
