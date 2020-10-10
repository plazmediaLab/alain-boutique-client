import UserState from 'context/User/UserState';
import '../styles/tailwind.css';

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      <Component {...pageProps} />
    </UserState>
  );
}

export default MyApp;
