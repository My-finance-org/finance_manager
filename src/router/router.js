import { useRoutes, useNavigate, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ path, element}) => {
  const isAuthenticated = true;
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export const PublicRoute = ({ path, restricted, element }) => {
  const isAuthenticated = false;
  const navigate = useNavigate();

  if (isAuthenticated && restricted) {
    return <Navigate to="/" replace />;
  }

  return element;
};
