import Layout from 'components/layout';
import NavBar from 'components/nav-bar/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import withAuth from 'helpers/withAuth';
import useGetData from 'hooks/useGetData';
import HomeContent from 'components/home/home-content';

function Home({ logged }) {
  const [loading] = useGetData(logged);

  return (
    <Layout>
      <Header />
      {loading ? (
        <MainSkeleton />
      ) : (
        <div className="main-container overflow-x-hidden min-h-full px-2 sm:px-3 py-16 sm:py-2">
          <HomeContent />
        </div>
      )}
      <NavBar />
    </Layout>
  );
}

export default withAuth(Home);
