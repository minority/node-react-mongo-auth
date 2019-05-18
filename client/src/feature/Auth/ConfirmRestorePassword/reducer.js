import {
  CONFIRM_RESTORE_REQUEST_PROCESS,
  CONFIRM_RESTORE_REQUEST_ERROR,
  CONFIRM_RESTORE_SUCCESS
} from "./actions";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const confirmRestorePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_RESTORE_REQUEST_PROCESS:
      return { ...state, isLoading: true };
    case CONFIRM_RESTORE_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case CONFIRM_RESTORE_SUCCESS:
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
