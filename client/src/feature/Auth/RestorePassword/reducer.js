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

const restoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_REQUEST_PROCESS:
      return { ...state, isLoading: true };
    case RESTORE_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case RESTORE_SUCCESS:
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

export default restoreReducer;
