import UserState from 'context/User/UserState';
import AuthState from 'context/Auth/AuthState';
import '../styles/tailwind.css';
import ProtectRoutes from 'context/Auth/ProtectRoutes';

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <ProtectRoutes>
        <UserState>
          <Component {...pageProps} />
        </UserState>
      </ProtectRoutes>
    </AuthState>
  );
}

export default MyApp;
