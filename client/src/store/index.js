import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import config from "../config";

import authReducers from "./auth";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const reducers = combineReducers(authReducers);
const middlewares = applyMiddleware(thunk, config.LOGGER_ENABLE && logger);

const store = createStore(reducers, composeEnhancers(middlewares));

export default store;
