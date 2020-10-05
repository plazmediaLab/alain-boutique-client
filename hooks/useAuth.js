import { useState } from 'react';
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

  const data = async (email, password) => {

    setLoading(true);

    try {

      const res = await axios.post('/api/user/login', {
        email,
        password
      });
      
      setError(null);
      setLoading(false);
      return console.log(res.data);
      
    } catch (error) {
      setLoading(false);
      return setError(error.response.data);
    }

  };

  return [data, loading, error]
};

export default useAuth