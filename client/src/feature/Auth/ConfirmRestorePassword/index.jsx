import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { confirmRestorePasswordRequest } from "./actions";
import Loader from "../../Shared/Loader";
import style from "./index.module.scss";

const ConfirmRestorePassword = props => {
  useEffect(() => {
    props.isAuth && props.history.push("/home");
  });

  useEffect(() => {
    const token = props.match.params.token;
    token && props.confirmRestorePasswordRequest(token);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.confirmRestorePasswordWrapper}>
      <Loader isLoading={props.isLoading}>
        {props.isSuccess ? (
          <div>
            <h1>Success</h1>
            <p>Password has changed.</p>
            <p>
              Go to <Link to="/">Sign in</Link>
            </p>
          </div>
        ) : (
          <div>
            <h1>Error</h1>
            <p>{props.errorMessage}</p>
          </div>
        )}
      </Loader>
    </div>
  );
};

ConfirmRestorePassword.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  confirmRestorePasswordRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.confirmRestorePassword.isLoading,
  isAuth: state.signin.isAuth,
  isError: state.confirmRestorePassword.isError,
  isSuccess: state.confirmRestorePassword.isSuccess,
  errorMessage: state.confirmRestorePassword.errorMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { confirmRestorePasswordRequest }
  )(ConfirmRestorePassword)
);
