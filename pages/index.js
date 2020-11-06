import publicAuthRedirect from 'helpers/publicAuthRedirect';

function Home() {
  return <h1>Index page...</h1>;
}

Home.getInitialProps = async (ctx) => {
  if (!ctx.query.access) {
    await publicAuthRedirect(ctx, '/home');
  }
  return {
    props: {}
  };
};

export default Home;
