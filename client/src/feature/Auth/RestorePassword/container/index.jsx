import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { RestorePasswordForm } from "../components/RestorePasswordForm";
import { connect } from "react-redux";
import { restorePasswordRequest } from "../actions";
import { withRouter, Link } from "react-router-dom";
import style from "./index.module.scss";

const RestorePassword = props => {
  useEffect(() => {
    props.isAuth && props.history.push("/home");
  });

  return (
    <div className={style.restorePasswordWrapper}>
      {props.isSuccess ? (
        <div className={style.authHeader}>
          <h1>Success</h1>
          <p>Link for restore password is sent to your email address.</p>
          <p>
            Go to <Link to="/">Sign in</Link>
          </p>
        </div>
      ) : (
        <RestorePasswordForm
          onSubmit={props.restorePasswordRequest}
          isLoading={props.isLoading}
          isError={props.isError}
          errorMessage={props.errorMessage}
        />
      )}
    </div>
  );
};

RestorePassword.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  restorePasswordRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.auth.restorePassword.isLoading,
  isAuth: state.auth.signin.isAuth,
  isError: state.auth.restorePassword.isError,
  isSuccess: state.auth.restorePassword.isSuccess,
  errorMessage: state.auth.restorePassword.errorMessage
});

export const RestorePasswordContainer = withRouter(
  connect(
    mapStateToProps,
    { restorePasswordRequest }
  )(RestorePassword)
);
