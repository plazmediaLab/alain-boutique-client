import UserContext from 'context/User/UserContext';
import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
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

  const userContext = useContext(UserContext);
  const { fetchDataSave } = userContext;

  const router = useRouter();

  const data = async (email, password) => {
    setLoading(true);

    try {
      const res = await axios.post('/api/user/login', {
        email,
        password
      });

      setError(null);
      setLoading(false);
      const {
        data: { authorization, user }
      } = res;

      localStorage.setItem('alain-x-access-token', authorization);

      fetchDataSave(user);
      router.push({ pathname: '/home' });
    } catch (err) {
      setLoading(false);
      console.log(err);
      if (err) setError(err.response.data);
    }
  };

  return [data, loading, error];
}

export default useAuth;
