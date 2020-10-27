import Loading from 'components/loading/loading';
import Router from 'next/router';
import { useContext } from 'react';
import AuthContext from './AuthContext';

// function redirectUser(ctx, location) {
//   if (ctx.req) {
//     ctx.res.writeHead(302, { Location: location });
//     ctx.res.end();
//   } else {
//     Router.push(location);
//   }
// }

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
