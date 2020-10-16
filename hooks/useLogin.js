import UserContext from 'context/User/UserContext';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import fetchUserData from 'services/fetch-user-data';
import axios from 'services/axios';
import { postLogin } from 'services/rest_service';

/**
 *
 * @function data(email, password) => return Data Auth
 * @type Boolean
 * @error Return errors
 */
function useLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const userContext = useContext(UserContext);
  const { setUserMethod } = userContext;

  const login = async (body) => {
    setLoading(true);

    const res = await postLogin(body);

    if (!res.ok) {
      setLoading(false);
      setError(res);
    }

    if (res.ok) {
      console.log(res.authorization);
      setError(null);
      setLoading(false);
    }
  };

  return [login, loading, error];
}

export default useLogin;
