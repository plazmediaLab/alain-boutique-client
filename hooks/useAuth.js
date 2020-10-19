import UserContext from 'context/User/UserContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { postUserInfo } from 'services/rest_service';
import Cookie from 'js-cookie';

function useAuth(A_CSRF_TOKEN) {
  const [successAuth, setSuccessAuth] = useState(false);
  const [process, setProcess] = useState(false);

  const router = useRouter();

  const userContext = useContext(UserContext);
  const { A_CSRF_Auth, user, setACSRFMethod, setUserMethod } = userContext;

  const authorization = async () => {
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

  useEffect(() => {
    if (!user) {
      authorization(A_CSRF_TOKEN).then((res) => {
        setProcess(res);
      });
    }
    if (user && A_CSRF_Auth) {
      setSuccessAuth(true);
    }
  }, [process]);

  return [successAuth, authorization];
}

export default useAuth;
