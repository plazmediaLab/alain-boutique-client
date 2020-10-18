import UserContext from 'context/User/UserContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { postUserInfo } from 'services/rest_service';
import Cookie from 'js-cookie';

/**
 *
 * @function data(A_CSRF_TOKEN) => return True for authorization access or Null
 * @type Boolean
 * @error Return errors
 */
function useAuth() {
  const router = useRouter();

  const userContext = useContext(UserContext);
  const { setACSRFMethod, setUserMethod } = userContext;

  const authorization = async (A_CSRF_TOKEN) => {
    const res = await postUserInfo(A_CSRF_TOKEN);

    if (!res || !res.ok) {
      router.push('/login');
      return false;
    }

    if (res.ok) {
      setACSRFMethod();
      setUserMethod(res.data);
      return true;
    }
  };

  return [authorization];
}

export default useAuth;
