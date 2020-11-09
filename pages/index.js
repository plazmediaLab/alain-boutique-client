function Home() {
  return <h1>Index page...</h1>;
}

Home.getInitialProps = async (ctx) => {
  if (!ctx.query.access) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
  }
  return {
    props: {}
  };
};

export default Home;
