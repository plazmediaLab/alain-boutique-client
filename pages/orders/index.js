import Layount from 'components/layout';
// import processToken from 'helpers/authToken';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import useAuth from 'hooks/useAuth';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import { useState } from 'react';

export default function Orders(props) {
  const [successAuth] = useState(true);

  return (
    <Layount>
      {successAuth ? (
        <>
          <Header />
          <div className="main-container overflow-x-hidden min-h-full p-2">
            <h1>Orders page...</h1>
          </div>
          <NavBar />
        </>
      ) : (
        <MainSkeleton />
      )}
    </Layount>
  );
}

// export async function getServerSideProps(constex) {
//   return {
//     props: {
//       A_CSRF_TOKEN: processToken(constex.req)
//     }
//   };
// }
