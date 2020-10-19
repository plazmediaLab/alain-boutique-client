import Layount from 'components/layout';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import useAuth from 'hooks/useAuth';
import processToken from 'helpers/authToken';
import { useEffect } from 'react';

export default function Home(props) {
  const [successAuth, authorization] = useAuth(props.A_CSRF_TOKEN);

  useEffect(
    () => {
      authorization();
    },
    [
      /* dependencia */
    ]
  );

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
  return {
    props: {
      A_CSRF_TOKEN: processToken(constex.req)
    }
  };
}
