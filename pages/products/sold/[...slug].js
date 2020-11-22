import { useRouter } from 'next/router';
import Header from 'components/header/header';
import Layout from 'components/layout';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import NavBar from 'components/nav-bar/nav-bar';
import useGetData from 'hooks/useGetData';
import withAuth from 'helpers/withAuth';
import { useContext } from 'react';
import ProductsContext from 'context/Products/ProductsContext';
import BackHeaderControl from 'components/products/sold/back-header-control';
import GroupListHeader from 'components/products/sold/group-list-header';
import { countGroupProductsSold } from 'helpers/count-products';
import ProductList from 'components/products/sold/product-list';

function ProductsGroupsSold({ logged }) {
  const router = useRouter();
  const slug = router.query.slug || [];

  const [loading] = useGetData(logged);

  const productsContext = useContext(ProductsContext);
  const { active_group = {}, products = [] } = productsContext;

  return (
    <Layout>
      <Header />
      {loading ? (
        <MainSkeleton />
      ) : (
        <div className="main-container overflow-x-hidden min-h-full px-2 sm:px-3 py-16 sm:py-2">
          <BackHeaderControl />
          <GroupListHeader
            slug={slug}
            color={active_group.color}
            productsSold={countGroupProductsSold(products, active_group._id)}
          />
          <ProductList active_group={active_group} products={products} />
        </div>
      )}
      <NavBar />
    </Layout>
  );
}

export default withAuth(ProductsGroupsSold);
