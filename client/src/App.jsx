import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { AuthRoute } from "./feature/Common/AuthRoute";
import { Layout } from "./feature/Common/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((item, i) =>
            item.isAuth ? (
              <AuthRoute
                path={item.path}
                component={item.component}
                key={i}
                exact={item.exact}
              />
            ) : (
              <Route
                path={item.path}
                component={item.component}
                key={i}
                exact={item.exact}
              />
            )
          )}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
