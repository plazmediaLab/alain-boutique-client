import Layount from 'components/layout';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import { useState } from 'react';
import withAuth from 'helpers/withAuth';
import uselogut from 'hooks/useLogut';

function Home({ logged }) {
  const [processLogout] = uselogut();
  const [successAuth] = useState(true);

  return (
    <Layount>
      <Header />
      {successAuth ? (
        <div className="main-container overflow-x-hidden min-h-full p-2">
          <h1>Home page...</h1>
          <button
            className="py-1 px-3 rounded-full bg-red-600 text-white text-xs tracking-wider"
            onClick={processLogout}>
            LogOut
          </button>
        </div>
      ) : (
        <MainSkeleton />
      )}
      <NavBar />
    </Layount>
  );
}

export default withAuth(Home);

// // Server-Side Rendering
// Index.getInitialProps = async (ctx) => {
//   return {
//     props: {}
//   };
// };
