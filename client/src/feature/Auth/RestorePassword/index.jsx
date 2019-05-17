import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import RestorePasswordForm from "./components/RestorePasswordForm";
import { connect } from "react-redux";
import { restoreRequest } from "./actions";
import { withRouter, Link } from "react-router-dom";
import style from "./index.module.scss";

const RestorePassword = props => {
  useEffect(() => {
    props.isAuth && props.history.push("/home");
  });

  return (
    <Row>
      <Col
        xs={{ span: 14, offset: 5 }}
        sm={{ span: 12, offset: 6 }}
        md={{ span: 10, offset: 7 }}
        lg={{ span: 8, offset: 8 }}
        xl={{ span: 6, offset: 9 }}
      >
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
              onSubmit={props.restoreRequest}
              isLoading={props.isLoading}
              isError={props.isError}
              errorMessage={props.errorMessage}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

RestorePassword.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  restoreRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.restore.isLoading,
  isAuth: state.signin.isAuth,
  isError: state.restore.isError,
  isSuccess: state.restore.isSuccess,
  errorMessage: state.restore.errorMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { restoreRequest }
  )(RestorePassword)
);
