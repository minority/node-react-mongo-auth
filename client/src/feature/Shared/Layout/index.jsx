import React from "react";
import PropTypes from "prop-types";
import { Auth } from "./components/Auth";
import { Cabinet } from "./components/Cabinet";
import { menuList } from "../../../config/menu";
import { connect } from "react-redux";

const LayoutContainer = props => {
  return props.isAuth ? (
    <Cabinet menuList={menuList}>{props.children}</Cabinet>
  ) : (
    <Auth>{props.children}</Auth>
  );
};

LayoutContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.auth.signin.isAuth
});

export const Layout = connect(mapStateToProps)(LayoutContainer);
