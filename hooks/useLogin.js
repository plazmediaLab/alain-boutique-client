import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { postLogin } from 'services/rest_service';
import Cookies from 'js-cookie';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthContext from 'context/Auth/AuthContext';

function useLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const authContext = useContext(AuthContext);
  const { loginMethod } = authContext;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Introduzca una dirección de correo electrónico válida.')
        .required('El campo EMAIL es requerido.')
        .trim(),
      password: Yup.string().required('El campo PASSWORD es requerido.')
    }),
    onSubmit: async (val) => {
      setLoading(true);

      const res = await postLogin(val);

      if (!res.ok) {
        setLoading(false);
        setError(res);
      }

      if (res.ok) {
        Cookies.set('A-CSRF-COOKIE', res.authorization, { expires: 60 /*, sameSite: 'alain'*/ });
        loginMethod(res.user);
        setError(null);
        setLoading(false);
        router.replace('/home');
      }
    }
  });

  return [formik, loading, error];
}

export default useLogin;
