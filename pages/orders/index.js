import Layount from 'components/layout';
// import processToken from 'helpers/authToken';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import { useState } from 'react';
import withAuth from 'helpers/withAuth';

function Orders({ logged }) {
  const [successAuth] = useState(true);

  console.log(logged);

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

export default withAuth(Orders);