import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import SigninForm from "./components/SigninForm";
import style from "./index.module.scss";
import { connect } from "react-redux";
import { signinRequest } from "./actions";
import { withRouter } from "react-router-dom";

const Signin = props => {
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
        <div className={style.signinFormWrapper}>
          <SigninForm
            onSubmit={props.signinRequest}
            isLoading={props.isLoading}
            isError={props.isError}
            errorMessage={props.errorMessage}
          />
        </div>
      </Col>
    </Row>
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
  isLoading: state.signin.isLoading,
  isAuth: state.signin.isAuth,
  isError: state.signin.isError,
  errorMessage: state.signin.errorMessage
});

export default withRouter(
  connect(
    mapStateToProps,
    { signinRequest }
  )(Signin)
);
