import Layount from 'components/layout';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';

export default function Home(props) {
  console.log(props);

  return (
    <>
      <Layount>
        <Header />

        <section className="overflow-x-hidden min-h-full p-2">
          <h1>Home page...</h1>
        </section>

        <NavBar />
      </Layount>

      <style jsx>{`
        section {
          min-height: calc(100% - 112px);
        }
      `}</style>
    </>
  );
}
