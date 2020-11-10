import Header from 'components/header/header';
import Layout from 'components/layout';
import NavBar from 'components/nav-bar/nav-bar';
import NewProduct from 'components/new/products/new-product';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import withAuth from 'helpers/withAuth';
import { useState } from 'react';

function Product() {
  const [loading] = useState(false);

  return (
    <Layout>
      <Header />
      {loading ? (
        <MainSkeleton />
      ) : (
        <div className="main-container overflow-x-hidden min-h-full p-2 sm:p-3 pb-16 sm:pb-2">
          <h2 className="text-gray-400 text-center text-xs uppercase mt-2 mb-3 font-medium tracking-wide">
            Agrega producto al grupo
          </h2>
          <NewProduct />
        </div>
      )}
      <NavBar />
    </Layout>
  );
}

export default withAuth(Product);
