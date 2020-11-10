import Layout from 'components/layout';
// import processToken from 'helpers/authToken';
import NavBar from 'components/nav-bar/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import { useState } from 'react';
import withAuth from 'helpers/withAuth';

function Summary({ logged }) {
  const [successAuth] = useState(true);

  return (
    <Layout>
      {successAuth ? (
        <>
          <Header />
          <div className="main-container overflow-x-hidden min-h-full p-2">
            <h1>Summary page...</h1>
          </div>
          <NavBar />
        </>
      ) : (
        <MainSkeleton />
      )}
    </Layout>
  );
}

export default withAuth(Summary);
