import Layount from 'components/layout';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import useAuth from 'hooks/useAuth';
import processToken from 'helpers/authToken';
import uselogut from 'hooks/uselogut';

export default function Home(props) {
  const [processLogout] = uselogut();
  const [successAuth] = useAuth(props.A_CSRF_TOKEN);

  return (
    <>
      <Layount>
        {successAuth ? (
          <>
            <Header />

            <section className="overflow-x-hidden min-h-full p-2">
              <h1>Home page...</h1>
              <button
                className="py-1 px-3 rounded-full bg-red-600 text-white text-xs tracking-wider"
                onClick={processLogout}>
                LogOut
              </button>
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
