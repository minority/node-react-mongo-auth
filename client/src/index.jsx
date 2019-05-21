import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import "./index.scss";

import { getAuthUserData } from "./helpers/auth";
import { signinSuccess } from "./feature/Auth/Signin/actions";

const userAuth = getAuthUserData();
if (userAuth) {
  store.dispatch(signinSuccess(userAuth));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
