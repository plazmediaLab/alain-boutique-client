import UserState from 'context/User/UserState';
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserState>
      
      <Component {...pageProps} />

    </UserState>
  );
};

export default MyApp
