import { useRouter } from 'next/router';
import { useState } from 'react';
import { postLogin } from 'services/rest_service';
import Cookie from 'js-cookie';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function useLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

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
        Cookie.set('A-CSRF-COOKIE', res.authorization, { /*secure: true,*/ sameSite: 'alain' });

        setError(null);
        setLoading(false);
        router.push('/home');
      }
    }
  });

  return [formik, loading, error];
}

export default useLogin;
