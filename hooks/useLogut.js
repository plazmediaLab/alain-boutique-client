import { useState, useContext } from 'react';
import UserContext from 'context/User/UserContext';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

function uselogut() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const userContext = useContext(UserContext);
  const { logOutMethod } = userContext;

  const router = useRouter();

  const processLogout = async () => {
    logOutMethod();
    Cookie.remove('A-CSRF-COOKIE');
    router.replace('/login');
    console.log('Seccess Logout...');
  };

  return [processLogout, loading, error];
}

export default uselogut;