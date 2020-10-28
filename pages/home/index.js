import Layount from 'components/layout';
// import processToken from 'helpers/authToken';
import uselogut from 'hooks/uselogut';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import { useState } from 'react';

export default function Index() {
  const [processLogout] = uselogut();
  const [successAuth] = useState(false);

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

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       A_CSRF_TOKEN: processToken(context.req)
//     }
//   };
// }
