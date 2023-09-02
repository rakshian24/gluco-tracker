import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../common/slices';
import { ROUTES } from '../constants';

const ProtectedRoute = () => {
  const [userInfo] = useAuth();
  return userInfo ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} replace />;
};
export default ProtectedRoute;