import {
  SIGNUP_REQUEST_PROCESS,
  SIGNUP_REQUEST_ERROR,
  SIGNUP_SUCCESS
} from "./actions";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case SIGNUP_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false
      };
    default:
      return state;
  }
};
