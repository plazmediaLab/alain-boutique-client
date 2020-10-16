import Layount from 'components/layout';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import MainSkeleton from 'components/skeleton-placeholder/main-skeleton';
import useVerifyAuth from 'hooks/useVerifyAuth';

export default function Home() {
  // TODO · Crear el componente Skeleton para mostrar mientras carga la informaciòn 10/15/2020

  const authorization = useVerifyAuth();

  return (
    <>
      <Layount>
        {!authorization ? (
          <MainSkeleton />
        ) : (
          <>
            <Header />

            <section className="overflow-x-hidden min-h-full p-2">
              <h1>Home page...</h1>
            </section>

            <NavBar />
          </>
        )}
      </Layount>

      <style jsx>{`
        section {
          min-height: calc(100% - 112px);
        }
      `}</style>
    </>
  );
}
