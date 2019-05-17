import React from "react";
import PropTypes from "prop-types";
import Clear from "./components/Clear";
import Cabinet from "./components/Cabinet";
import menuList from "../../../config/menu";
import { connect } from "react-redux";

const Layout = props => {
  return props.isAuth ? (
    <Cabinet props={menuList}>{props.children}</Cabinet>
  ) : (
    <Clear>{props.children}</Clear>
  );
};

Layout.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.signin.isAuth
});

export default connect(mapStateToProps)(Layout);
