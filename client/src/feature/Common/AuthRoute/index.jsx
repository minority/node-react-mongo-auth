import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { checkTokenExpire, getAuthUserData } from "../../../helpers/auth";
import { refreshTokenRequest } from "../../Auth/Signin/actions";

const AuthRouteContainer = ({ component: Component, ...rest }) => {
  useEffect(() => {
    const userAuth = getAuthUserData();

    if (userAuth) {
      const refreshToken = userAuth.refreshToken;
      const accessToken = userAuth.accessToken;

      if (!checkTokenExpire(refreshToken) || !checkTokenExpire(accessToken)) {
        rest.refreshTokenRequest(refreshToken);
      }
    }
  });

  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

AuthRouteContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  refreshTokenRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.auth.signin.isAuth
});

export const AuthRoute = connect(
  mapStateToProps,
  { refreshTokenRequest }
)(AuthRouteContainer);
