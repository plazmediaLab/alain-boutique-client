import UserContext from 'context/User/UserContext';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

function useVerifyAuth() {
  const [authorization, setAuthorization] = useState(null);

  const router = useRouter();

  const userContext = useContext(UserContext);
  const { user, setACSRFMethod } = userContext;

  const successAuthLogin = () => {
    if (user) {
      setACSRFMethod();
    }
  };

  useEffect(
    () => {
      const ACSRF = localStorage.getItem('A-CSRF-TOKEN');
      if (!ACSRF) {
        router.push('/');
      } else {
        successAuthLogin();
      }
    },
    [
      /* dependencia */
    ]
  );

  return authorization;
}

export default useVerifyAuth;
