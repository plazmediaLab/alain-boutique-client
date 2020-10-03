import Head from 'next/head';

export default function HeaderMeta(){
  return (
    <Head>
      <title>Alain Boutique Sales Manager</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="/isotype-white-16px.png"/>
      <meta name="theme-color" content="#0F0F10"></meta>
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
    </Head>
  );
};