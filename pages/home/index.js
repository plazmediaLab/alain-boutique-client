import Layount from 'components/layout';
import UserContext from 'context/User/UserContext';
import processToken from 'helpers/authToken';
import uselogut from 'hooks/uselogut';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import useAuth from 'hooks/useAuth';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';

export default function Index(props) {
  const [successAuth] = useAuth(props.A_CSRF_TOKEN);
  const [processLogout] = uselogut();

  return (
    <Layount>
      {successAuth ? (
        <>
          <Header />
          <div className="main-container overflow-x-hidden min-h-full p-2">
            <h1>Home page...</h1>
            <button
              className="py-1 px-3 rounded-full bg-red-600 text-white text-xs tracking-wider"
              onClick={processLogout}>
              LogOut
            </button>
          </div>
          <NavBar />
        </>
      ) : (
        <MainSkeleton />
      )}
    </Layount>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      A_CSRF_TOKEN: processToken(context.req)
    }
  };
}
