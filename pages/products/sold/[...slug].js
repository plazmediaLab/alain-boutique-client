import { useRouter } from 'next/router';
import Header from 'components/header/header';
import Layout from 'components/layout';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import NavBar from 'components/nav-bar/nav-bar';
import useGetData from 'hooks/useGetData';
import withAuth from 'helpers/withAuth';
import GroupListHeader from 'components/products/sold/group-list-header';
import formatSlug from 'helpers/formatSlug';
import { useContext } from 'react';
import ProductsContext from 'context/Products/ProductsContext';

function ProductsGroupsSold({ logged }) {
  const router = useRouter();
  const slug = router.query.slug || [];

  const [loading] = useGetData(logged);

  const productsContext = useContext(ProductsContext);
  const { active_group = {} } = productsContext;

  return (
    <Layout>
      <Header />
      {loading ? (
        <MainSkeleton />
      ) : (
        <div className="main-container overflow-x-hidden min-h-full px-2 sm:px-3 py-16 sm:py-2">
          <GroupListHeader />
          <hr className="my-2" />
          <section className="flex">
            <h1 className="flex-1">
              Grupo: <span className="font-light">{formatSlug(slug[0])}</span>
            </h1>
            <div className="flex items-center space-x-1" title="Color de etiqueta">
              <div className="color rounded inline-block"></div>
              <svg
                className="w-6 h-6 inline-block mr-1 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </section>
          <style jsx>{`
            div.color {
              background-color: ${active_group.color};
              width: 1.2rem;
              height: 1.2rem;
            }
          `}</style>
        </div>
      )}
      <NavBar />
    </Layout>
  );
}

export default withAuth(ProductsGroupsSold);
