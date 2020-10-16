import UserContext from 'context/User/UserContext';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import fetchUserData from 'services/fetch-user-data';
import axios from 'utilities/axios';

/**
 *
 * @function data(email, password) => return Data Auth
 * @type Boolean
 * @error Return errors
 */
function useAuth() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const userContext = useContext(UserContext);
  const { setUserMethod } = userContext;

  const login = async (email, password) => {
    setLoading(true);

    try {
      const {
        data: { authorization }
      } = await axios.post('/api/user/login', {
        email,
        password
      });

      localStorage.setItem('A-CSRF-TOKEN', authorization);

      const data = await fetchUserData(authorization);

      setUserMethod(data);

      router.push({ pathname: '/home' });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      if (err) setError(err.response.data);
    }
  };

  return [login, loading, error];
}

export default useAuth;
