import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

type ManagerRouteProps = {
  children: React.ReactNode;
};

function ManagerRoute({ children }: ManagerRouteProps) {
  const auth = useContext(AuthContext);

  if (!auth?.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!auth.user?.venueManager) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ManagerRoute;