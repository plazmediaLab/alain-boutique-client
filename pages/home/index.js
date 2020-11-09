import Layount from 'components/layout';
import NavBar from 'components/nav-bar/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import withAuth from 'helpers/withAuth';
import useGetData from 'hooks/useGetData';
import HomeContent from 'components/home/home-content';

function Home({ logged }) {
  const [loading] = useGetData(logged);

  return (
    <Layount>
      <Header />
      {loading ? (
        <MainSkeleton />
      ) : (
        <div className="main-container overflow-x-hidden min-h-full p-2 sm:p-3 pb-16 sm:pb-2">
          <HomeContent />
        </div>
      )}
      <NavBar />
    </Layount>
  );
}

export default withAuth(Home);
