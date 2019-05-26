import {
  RESTORE_REQUEST_PROCESS,
  RESTORE_REQUEST_ERROR,
  RESTORE_SUCCESS
} from "./actions";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const restorePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case RESTORE_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case RESTORE_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false
      };
    default:
      return state;
  }
};
