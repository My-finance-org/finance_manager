import React from "react";
import PropTypes from "prop-types";
import style from "./AuthLayout.module.scss";

export const AuthLayout = ({ children }) => {
  return <div className={style.authLayout}>{children}</div>;
};
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
