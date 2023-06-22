import { RoutesEnum } from "@/constants/emun/routes";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ element }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return (
      <Navigate
        to={RoutesEnum.SignIn}
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
        to={RoutesEnum.Home}
        replace
      />
    );
  }

  return element;
};
