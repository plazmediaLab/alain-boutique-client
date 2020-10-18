import { useRouter } from 'next/router';
import { useState } from 'react';
import { postLogin } from 'services/rest_service';
import Cookie from 'js-cookie';

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

  const login = async (body) => {
    setLoading(true);

    const res = await postLogin(body);

    if (!res.ok) {
      setLoading(false);
      setError(res);
    }

    if (res.ok) {
      Cookie.set('A-CSRF-COOKIE', res.authorization, { /*secure: true,*/ sameSite: 'alain' });

      setError(null);
      setLoading(false);
      router.push('/home');
    }
  };

  return [login, loading, error];
}

export default useLogin;
