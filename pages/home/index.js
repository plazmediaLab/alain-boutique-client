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
        <div className="main-container overflow-x-hidden min-h-full p-2 sm:p-3 pb-16 sm:pb-2 pt-16 sm:pt-2 bg-white">
          <HomeContent />
        </div>
      )}
      <NavBar />
    </Layout>
  );
}

export default withAuth(Home);
