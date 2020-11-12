import { useFormik } from 'formik';
import { useState } from 'react';
import { storeGroup } from 'services/post_data_services';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import useGetData from './useGetData';

function useGroupNew(setOpenNewGroup, color) {
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [, , setUpdate] = useGetData();

  const formik = useFormik({
    initialValues: {
      name: '',
      color: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El campo NOMBRE es requerido.').trim()
    }),
    onSubmit: async (val) => {
      setLoading(true);

      val.color = color;

      const res = await storeGroup(val);

      if (!res.ok) {
        setLoading(false);
        Swal.fire('Error!', res.mensaje, 'error');
      }

      if (res.ok) {
        setUpdate(true);
        setLoading(false);
        setOpenNewGroup(false);
        // Swal.fire('Creado!', 'El grupo, ha sido creado exitosamente!.', 'success');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El grupo, ha sido creado exitosamente!.',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true
        });
      }
    }
  });

  return [
    formik,
    loading,
    {
      /*error*/
    }
  ];
}

export default useGroupNew;
