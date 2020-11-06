import { useContext, useEffect } from 'react';
import Router from 'next/router';
import authToken from './authToken';
import AuthContext from 'context/Auth/AuthContext';
import { postUserInfo } from 'services/rest_service';
import cookie from 'js-cookie';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const authContext = useContext(AuthContext);
    const { user, logged, setUserMethod } = authContext;

    const TOKEN = cookie.get('A-CSRF-COOKIE');
    const ValidToken = new authToken(TOKEN).isValid;

    const redirectHome = () => {
      if (
        Router.pathname === '/login' ||
        Router.pathname === '/signup' ||
        Router.pathname === '/'
      ) {
        Router.push({
          pathname: '/home'
        });
      }
    };

    const authProcces = async () => {
      if (TOKEN && ValidToken) {
        // Realizar la petición por los datos del usuario
        const res = await postUserInfo(TOKEN);

        // Si la respuesta con el Token resivida es negativa
        if (!res.ok) {
          Router.push('/login');
        }

        // Si la respuesta con el Token resivida es positiva
        if (res.ok) {
          setUserMethod(res.data);
          redirectHome();
        }
      }

      if (!TOKEN || !ValidToken) {
        Router.push({
          pathname: '/login',
          query: { access: Router.pathname, auth: 'unauthorized' }
        });
      }
    };

    useEffect(() => {
      if ((!user, !logged)) {
        authProcces();
      }
    }, []);

    return (TOKEN || ValidToken) && <WrappedComponent {...props} logged={logged} />;
  };

  Wrapper.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name})`;

  return Wrapper;
};

export default withAuth;
