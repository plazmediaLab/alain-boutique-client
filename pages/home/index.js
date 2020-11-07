import Layount from 'components/layout';
import NavBar from 'components/nav-bar/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import { useState } from 'react';
import withAuth from 'helpers/withAuth';

function Home({ logged }) {
  const [successAuth] = useState(true);

  return (
    <Layount>
      <Header />
      {successAuth ? (
        <div className="main-container overflow-x-hidden min-h-full p-2">
          <h1>Home page...</h1>
        </div>
      ) : (
        <MainSkeleton />
      )}
      <NavBar />
    </Layount>
  );
}

export default withAuth(Home);
