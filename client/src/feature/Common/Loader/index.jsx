import React from "react";
import PropTypes from "prop-types";
import { Spin } from "antd";

const LoaderComponent = ({ children, isLoading }) => {
  return isLoading ? <Spin size="large" /> : children;
};

LoaderComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export const Loader = LoaderComponent;
