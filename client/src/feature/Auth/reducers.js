import { combineReducers } from "redux";

import { signinReducer as signin } from "./Signin";
import { signupReducer as signup } from "./Signup";
import { restorePasswordReducer as restorePassword } from "./RestorePassword";
import { confirmRestorePasswordReducer as confirmRestorePassword } from "./ConfirmRestorePassword";

export const reducers = combineReducers({
  signin,
  signup,
  restorePassword,
  confirmRestorePassword
});
