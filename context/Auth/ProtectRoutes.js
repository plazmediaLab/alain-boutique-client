import Loading from 'components/loading/loading';
import { useContext } from 'react';
import AuthContext from './AuthContext';

const ProtectRoutes = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  if (
    loading ||
    (!isAuthenticated &&
      window.location.pathname !== '/login' &&
      window.location.pathname !== '/signup')
  ) {
    return <Loading />;
  }
  return children;
};

export default ProtectRoutes;
