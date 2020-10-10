import { useState } from 'react';
import Layount from 'components/layout';
import NavBar from 'components/nav-bar.js/nav-bar';
import Header from 'components/header/header';
import CounterLength from 'components/counter-length';

export default function Home() {
  const [characters, setCharacters] = useState(0);

  return (
    <>
      <Layount>
        <Header />

        <section className="overflow-x-hidden min-h-full pla">
          <div className="p-4">
            <textarea
              name="devit"
              id="devit"
              rows="5"
              placeholder="En que estas pensando"
              className="w-full box-border resize bg-transparent text-white placeholder-gray-600"
              onChange={(e) => setCharacters(e.target.value.length)}></textarea>
          </div>
          {/* <div className="h-screen bg-blue-500 block"></div> */}
          <CounterLength characters={characters} />
        </section>

        <NavBar />
      </Layount>

      <style jsx>{`
        section {
          min-height: calc(100% - 112px);
          background-color: #15202b;
        }
        div {
          background-color: #253341;
        }
      `}</style>
    </>
  );
}
