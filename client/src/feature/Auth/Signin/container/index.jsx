import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { SigninForm } from "../components/SigninForm";
import style from "./index.module.scss";
import { connect } from "react-redux";
import { signinRequest } from "../actions";
import { withRouter } from "react-router-dom";

const Signin = props => {
  useEffect(() => {
    props.isAuth && props.history.push("/home");
  });

  return (
    <div className={style.signinFormWrapper}>
      <SigninForm
        onSubmit={props.signinRequest}
        isLoading={props.isLoading}
        isError={props.isError}
        errorMessage={props.errorMessage}
      />
    </div>
  );
};

Signin.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  signinRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.auth.signin.isLoading,
  isAuth: state.auth.signin.isAuth,
  isError: state.auth.signin.isError,
  errorMessage: state.auth.signin.errorMessage
});

export const SigninContainer = withRouter(
  connect(
    mapStateToProps,
    { signinRequest }
  )(Signin)
);
