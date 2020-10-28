import AuthState from 'context/Auth/AuthState';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <Component {...pageProps} />
    </AuthState>
  );
}

export default MyApp;
