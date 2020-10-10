import HeaderMeta from 'components/header-meta';
import styles, { globalStyles } from './styles';

export default function Layount({ children }) {
  return (
    <>
      <HeaderMeta />

      <header className="container mx-auto ml-3 mt-3 fixed hidden sm:block">
        <img src="/imagotype-colors.svg" alt="Logo Plazmedia" className="w-32 absolute" />
      </header>

      <section className="overflow-hidden">
        <main className="text-alain-blue-800 overflow-x-auto relative">
          {/* Component content ... */}
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
