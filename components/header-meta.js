import Head from 'next/head';

export default function HeaderMeta() {
  return (
    <Head>
      <title>Alain Boutique Sales Manager</title>
      <link rel="icon" type="image/png" href="/isotype-white-16px.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#0F0F10"></meta>
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Sistema de manejo de ventas online, venta de productos con manejo de inventario y ganancias"
      />
      <meta
        name="keywords"
        content="Alain, Boutique, Ventas, Facebook, Sold, Product, Sales, Manager"
      />
      <meta name="author" content="Adrian Nieves Uribe" />
      <meta name="copyright" content="Plazmedia & Alain Boutique" />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
        rel="stylesheet"></link>
      <html lang="es"></html>
    </Head>
  );
}
