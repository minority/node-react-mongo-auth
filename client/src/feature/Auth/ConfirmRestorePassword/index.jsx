import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col, Spin } from "antd";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { confirmRestorePasswordRequest } from "./actions";
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
    <Row>
      <Col
        xs={{ span: 14, offset: 5 }}
        sm={{ span: 12, offset: 6 }}
        md={{ span: 10, offset: 7 }}
        lg={{ span: 8, offset: 8 }}
        xl={{ span: 6, offset: 9 }}
      >
        <div className={style.confirmRestorePasswordWrapper}>
          {props.isLoading ? (
            <Spin size="large" />
          ) : props.isSuccess ? (
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
        </div>
      </Col>
    </Row>
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
