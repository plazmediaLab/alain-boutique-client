import { useEffect, useState } from 'react';
import HeaderMeta from 'components/header-meta';
import styles, { globalStyles } from './styles';
import createModalNode from 'helpers/createModalNode';

export default function Layount({ children }) {
  useEffect(() => {
    if (process.browser) createModalNode();
  }, [process.browser]);

  return (
    <>
      <HeaderMeta />

      <header className="container mx-auto ml-3 mt-3 fixed hidden sm:block">
        <img src="/imagotype-colors.svg" alt="Logo Plazmedia" className="w-32 absolute" />
      </header>

      <section className="overflow-hidden">
        <main className="text-alain-blue-800 overflow-x-auto relative">{children}</main>
      </section>

      <style global jsx>
        {globalStyles}
      </style>
      <style jsx>{styles}</style>
    </>
  );
}
