import { combineReducers } from "redux";

import { usersReducer as users } from "./Users";

export const reducers = combineReducers({
  users
});
