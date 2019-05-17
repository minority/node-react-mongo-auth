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

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST_PROCESS:
      return { ...state, isLoading: true };
    case SIGNUP_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case SIGNUP_SUCCESS:
      return {
        isSuccess: true,
        isLoading: false,
        isError: false,
        errorMessage: ""
      };
    default:
      return state;
  }
};

export default signupReducer;
