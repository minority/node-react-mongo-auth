import { combineReducers } from "redux";

import { authReducers } from "./feature/Auth";
import { cabinetReducers } from "./feature/Cabinet";

export const reducers = combineReducers({
  auth: authReducers,
  cabinet: cabinetReducers
});
