import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import config from "../config";

import authReducers from "./auth";

const reducers = combineReducers([...authReducers]);
const middlewares = applyMiddleware(thunk, config.LOGGER_ENABLE && logger);

const store = createStore(reducers, middlewares);

export default store;
