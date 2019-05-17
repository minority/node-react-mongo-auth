import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import SignupForm from "./components/SignupForm";
import { connect } from "react-redux";
import { signupRequest } from "./actions";
import { withRouter, Link } from "react-router-dom";
import style from "./index.module.scss";

const Signup = props => {
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
      </Col>
    </Row>
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
  isLoading: state.signup.isLoading,
  isAuth: state.signin.isAuth,
  isError: state.signup.isError,
  isSuccess: state.signup.isSuccess,
  errorMessage: state.signup.errorMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { signupRequest }
  )(Signup)
);
