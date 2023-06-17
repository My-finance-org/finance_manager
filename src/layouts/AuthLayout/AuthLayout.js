import React from "react";
import style from "./AuthLayout.module.scss";
import PropTypes from "prop-types";

export const AuthLayout = ({ children }) => {
  return <div className={style.authLayout}>{children}</div>;
};
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
