import withAuth from 'helpers/withAuth';

function Home() {
  return <h1>Index page...</h1>;
}

export default withAuth(Home);
