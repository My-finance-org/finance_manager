import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ element }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return element;
};

export const PublicRoute = ({ restricted, element }) => {
  const isAuthenticated = false;

  if (isAuthenticated && restricted) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return element;
};
