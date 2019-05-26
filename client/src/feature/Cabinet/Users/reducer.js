import {
  USERS_REQUEST_PROCESS,
  USERS_REQUEST_ERROR,
  USERS_REQUEST_SUCCESS
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case USERS_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case USERS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };
    default:
      return state;
  }
};
