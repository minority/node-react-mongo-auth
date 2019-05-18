import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";

const Loader = ({ children, isLoading }) => {
  return isLoading ? <Spin size="large" /> : children;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Loader;
