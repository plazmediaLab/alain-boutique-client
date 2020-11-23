import HeaderMeta from 'components/header-meta';
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <main className="w-full h-screen grid items-center text-alain-blue-800 container mx-auto">
      <HeaderMeta />
      <header className="p-2">
        <Image
          src="/imagotype-colors.svg"
          alt="Logotipo Alain Boutique"
          width={150}
          height={38}></Image>
      </header>
      <section className="text-center">
        <Image
          src="/isotype.svg"
          alt="Picture of the author"
          width={170}
          height={170}
          className="block"></Image>
        <h1 className="text-3xl font-bold">Alain Boutique</h1>
        <p className="text-slate-gray-400">Sistema de control de Ventas</p>
        <h5 className="text-slate-gray-400">v2.0.0</h5>
        <Link href="/login">
          <a className="mt-12 block w-2/3 sm:w-48 bg-alain-blue-500 text-white border border-alain-blue-500 rounded mx-auto py-2 uppercase tracking-wider text-sm hover:bg-alain-blue-400 hover:border-alain-blue-400">
            Iniciar sesión
          </a>
        </Link>
      </section>
      <footer className="text-center text-slate-gray-500 p-3">
        <small>Plazmedia &copy; 2020 · Alain Boutique &reg;</small>
      </footer>
      <style>{`
        main {
          grid-template-rows: auto 1fr auto;
        }
      `}</style>
    </main>
  );
}

export default Home;
