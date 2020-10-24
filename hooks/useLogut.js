import { useState, useContext } from 'react';
import UserContext from 'context/User/UserContext';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

function uselogut() {
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const userContext = useContext(UserContext);
  const { logOutMethod } = userContext;

  const router = useRouter();

  const processLogout = async () => {
    Cookie.remove('A-CSRF-COOKIE');
    router.replace('/login');
    logOutMethod();
  };

  return [processLogout];
}

export default uselogut;
