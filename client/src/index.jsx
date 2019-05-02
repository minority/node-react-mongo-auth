import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Layout from "./containers/Layout"
import store from "./store"
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import "./index.scss"

ReactDOM.render(
    (<Provider store={store}>
        <Layout isAuth={false}>
            <App />
        </Layout>
    </Provider>),
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
