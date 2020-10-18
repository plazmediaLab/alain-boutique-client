import Layount from 'components/layout';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import Cookies from 'cookies';
import authToken from 'helpers/authToken';
import useAuth from 'hooks/useAuth';
import { useContext, useEffect, useState } from 'react';
import UserContext from 'context/User/UserContext';

function Home(props) {
  // TODO · Rediseñar el componente Skeleton para mostrar mientras carga la informaciòn 10/15/2020
  // TODO · Refactorizar todo el proceso de Autenticación 10/18/2020

  // if (process.browser) alert(Cookie.get('A-CSRF-COOKIE'));
  const [successAuth, setSuccessAuth] = useState(false);
  const [process, setProcess] = useState(false);

  // const auth = props.A_CSRF_TOKEN;

  const [authorization] = useAuth();

  const userContext = useContext(UserContext);
  const { A_CSRF_Auth, user } = userContext;

  useEffect(() => {
    if (!user) {
      authorization(props.A_CSRF_TOKEN).then((res) => {
        setProcess(res);
      });
    }
    if (user && A_CSRF_Auth) {
      setSuccessAuth(true);
    }
  }, [process]);

  return (
    <>
      <Layount>
        {successAuth ? (
          <>
            <Header />

            <section className="overflow-x-hidden min-h-full p-2">
              <h1>Home page...</h1>
            </section>

            <NavBar />
          </>
        ) : (
          <MainSkeleton />
        )}
      </Layount>

      <style jsx>{`
        section {
          min-height: calc(100% - 112px);
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(constex) {
  // TODO · Crear un metodo para decodificar el token 10/16/2020

  // req, res, query
  // req cookies!
  const cookies = new Cookies(constex.req);

  // get token
  const A_CSRF_TOKEN = cookies.get('A-CSRF-COOKIE');

  const isValidToken = new authToken(A_CSRF_TOKEN).isValid;

  return {
    props: {
      A_CSRF_TOKEN: isValidToken ? A_CSRF_TOKEN : null
    }
  };
}

export default Home;
