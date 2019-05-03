import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool,
  component: PropTypes.func
};

export default PrivateRoute;
