import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import AuthContext from 'context/Auth/AuthContext';
import { useContext } from 'react';

function uselogut() {
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const { logOutMethod } = authContext;

  const router = useRouter();

  const processLogout = async () => {
    Cookies.remove('A-CSRF-COOKIE');
    router.replace('/login');
    logOutMethod();
  };

  return [processLogout];
}

export default uselogut;
