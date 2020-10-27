import Router from 'next/router';

const login = '/login?login-need=true'; // Define your login route address.

/**
 * Verifique la autenticación y autorización del usuario
 * Depende de usted y su proveedor de servicios de autenticación.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => {
  return { auth: true }; // change null to { isAdmin: true } for test it.
};

const withPrivateRoute = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        A_CSRF_ACCESS: true
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default withPrivateRoute;
