import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { postSignUp } from 'services/auth_service';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

function useSignUp(ROLE) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const router = useRouter();

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '',
      password: '',
      password_repeat: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El campo NOMBRE es requerido.').trim(),
      email: Yup.string()
        .email('Introduzca una dirección de correo electrónico válida.')
        .required('El campo EMAIL es requerido.')
        .trim(),
      password: Yup.string()
        .required('El campo PASSWORD es requerido.')
        .min(8, 'La contraseña debe tener almenos 8 caracteres.'),
      password_repeat: Yup.string()
        .required('El campo CONFIRMAR PASSWORD es requerido.')
        .oneOf([Yup.ref('password'), null], 'Las contraseñas tienen que coincidir.')
    }),
    onSubmit: async (values) => {
      setLoading(true);

      values.role = ROLE;

      const res = await postSignUp(values);

      if (!res.ok) {
        setLoading(false);
        setError({
          message: 'Se ejecuto un error inisperado en el servidor, intentelo mas tarde.'
        });
      }

      if (res._message) {
        setLoading(false);
        Toast.fire({
          icon: 'warning',
          title: 'Usuario ya registrado.'
        });
        setError({ message: capitalize(res.errors.email.message) });
      }

      if (res.ok) {
        setLoading(false);
        setError(null);
        Toast.fire({
          icon: 'success',
          title: 'Tu registro fue exitoso.'
        });
        console.log(res);
        router.push({ pathname: '/login' });
      }
    }
  });

  return [formik, loading, error];
}

export default useSignUp;
