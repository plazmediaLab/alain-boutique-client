import Layout from 'components/layout';
// import processToken from 'helpers/authToken';
import NavBar from 'components/nav-bar/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import { useState } from 'react';
import withAuth from 'helpers/withAuth';

function Orders({ logged }) {
  const [successAuth] = useState(true);

  return (
    <Layout>
      {successAuth ? (
        <>
          <Header />
          <div className="main-container overflow-x-hidden min-h-full px-2 sm:px-3 py-16 sm:py-2">
            <h1>Orders page...</h1>
          </div>
          <NavBar />
        </>
      ) : (
        <MainSkeleton />
      )}
    </Layout>
  );
}

export default withAuth(Orders);
