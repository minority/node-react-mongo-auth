import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./containers/Auth/PrivateRoute";
import Layout from "./containers/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout isAuth={false}>
        <Switch>
          {routes.map((item, i) =>
            item.isAuth ? (
              <PrivateRoute
                path={item.path}
                isAuth={false}
                component={item.component}
                key={i}
                exact
              />
            ) : (
              <Route
                path={item.path}
                component={item.component}
                key={i}
                exact
              />
            )
          )}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
