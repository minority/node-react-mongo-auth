import { combineReducers } from "redux";

import { authReducers } from "./feature/Auth";

export const reducers = combineReducers({ ...authReducers });
