import HeaderMeta from 'components/header-meta';
import styles, { globalStyles } from './styles';

export default function Layout({ children }) {
  return (
    <>
      <HeaderMeta />

      <div id="copy-clipboard" className="fixed mx-auto w-full flex items-center p-2 z-50"></div>

      <header className="container mx-auto ml-3 mt-3 fixed hidden sm:block">
        <img src="/imagotype-colors.svg" alt="Logo Plazmedia" className="w-32 absolute" />
      </header>

      <section className="overflow-hidden">
        <main id="main" className="text-alain-blue-800 overflow-x-hidden relative bg-white">
          <aside id="portal_node" className="sticky top-0 left-0 w-full z-30" />
          {children}
        </main>
      </section>

      <style global jsx>
        {globalStyles}
      </style>
      <style jsx>{styles}</style>
    </>
  );
}
