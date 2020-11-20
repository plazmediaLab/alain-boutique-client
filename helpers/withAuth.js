import { useContext, useEffect } from 'react';
import Router from 'next/router';
import authToken from './authToken';
import AuthContext from 'context/Auth/AuthContext';
import { postUserInfo } from 'services/auth_service';
import cookie from 'js-cookie';
import { getCookie } from './cookie';

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const authContext = useContext(AuthContext);
    const { user, logged, setUserMethod } = authContext;

    const TOKEN = cookie.get('A-CSRF-COOKIE');
    const ValidToken = new authToken(TOKEN).isValid;

    const authProcces = async () => {
      if (TOKEN && ValidToken) {
        // Realizar la petición por los datos del usuario
        const res = await postUserInfo(TOKEN);

        // Si la respuesta con el Token resivida es negativa
        if (!res.ok) {
          Router.push({
            pathname: '/login',
            query: { access: Router.pathname, auth: 'unauthorized' }
          });
        }

        // Si la respuesta con el Token resivida es positiva
        if (res.ok) {
          setUserMethod(res.data);
        }
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

  Wrapper.getInitialProps = async (ctx) => {
    if (ctx.req) {
      const token = getCookie('A-CSRF-COOKIE', ctx.req);
      const valid = new authToken(token).isValid;
      const url = ctx.req.url.replace(/([/])/g, '%2F');
      if (!valid) {
        ctx.res.writeHead(302, { Location: `/login?access=${url}&auth=unauthorized` });
        ctx.res.end();
      }
    }
    return {
      props: {}
    };
  };

  return Wrapper;
};

export default withAuth;
