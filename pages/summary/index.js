import Header from 'components/header/header';
import Layount from 'components/layout';
import NavBar from 'components/nav-bar.js/nav-bar';

export default function Summary() {
  return (
    <>
      <Layount>
        <Header />

        <section className="overflow-x-hidden min-h-full p-2">
          <h1>Summary page...</h1>
        </section>

        <NavBar />
      </Layount>

      <style jsx>{`
        section {
          min-height: calc(100% - 112px);
        }
      `}</style>
    </>
    //<style {/*global*/} jsx>{`
    //// Set styles here
    //`}</style>
  );
}
