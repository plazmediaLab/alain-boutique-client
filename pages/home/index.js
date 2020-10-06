import Layount from "components/layout";
import NavBar from "components/nav-bar.js/nav-bar";
import Header from "components/header/header";

export default function Home(){
  return (
    <>
      <Layount>

        <Header/>

        <section className="overflow-x-auto">
          <div className="h-screen bg-blue-500 block"></div>
        </section>

        <NavBar/>
        
      </Layount>

      <style jsx>{`
         
      `}</style>
    </>
  );
};