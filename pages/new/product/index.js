import Header from 'components/header/header';
import Layout from 'components/layout';
import NavBar from 'components/nav-bar/nav-bar';
import NewProduct from 'components/new/products/new-product';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import withAuth from 'helpers/withAuth';
import useGetData from 'hooks/useGetData';

function Product({ logged }) {
  const [loading] = useGetData(logged);

  return (
    <Layout>
      <Header />
      {loading ? (
        <MainSkeleton />
      ) : (
        <div className="main-container overflow-x-hidden min-h-full px-2 sm:px-3 py-16 sm:py-2">
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
