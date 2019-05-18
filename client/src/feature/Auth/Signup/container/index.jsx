import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { SignupForm } from "../components/SignupForm";
import { connect } from "react-redux";
import { signupRequest } from "../actions";
import { withRouter, Link } from "react-router-dom";
import style from "./index.module.scss";

const Signup = props => {
  useEffect(() => {
    props.isAuth && props.history.push("/home");
  });

  return (
    <div className={style.signupFormWrapper}>
      {props.isSuccess ? (
        <div className={style.authHeader}>
          <h1>Success</h1>
          <p>A password is sent to your email address.</p>
          <p>
            Go to <Link to="/">Sign in</Link>
          </p>
        </div>
      ) : (
        <SignupForm
          onSubmit={props.signupRequest}
          isLoading={props.isLoading}
          isError={props.isError}
          errorMessage={props.errorMessage}
        />
      )}
    </div>
  );
};

Signup.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  signupRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.auth.signup.isLoading,
  isAuth: state.auth.signin.isAuth,
  isError: state.auth.signup.isError,
  isSuccess: state.auth.signup.isSuccess,
  errorMessage: state.auth.signup.errorMessage
});

export const SignupContainer = withRouter(
  connect(
    mapStateToProps,
    { signupRequest }
  )(Signup)
);
