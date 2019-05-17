import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import PrivateRoute from "./feature/Shared/PrivateRoute";
import Layout from "./feature/Shared/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((item, i) =>
            item.isAuth ? (
              <PrivateRoute
                path={item.path}
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
