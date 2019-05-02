import React from "react";
import PropTypes from "prop-types";
import Clear from "./clear";
import Cabinet from "./cabinet";

const Layout = (props) => {
  return props.isAuth 
    ? <Cabinet>{props.children}</Cabinet> 
    : <Clear>{props.children}</Clear>;
};

Layout.propTypes = {
  isAuth: PropTypes.bool
};

export default Layout;
