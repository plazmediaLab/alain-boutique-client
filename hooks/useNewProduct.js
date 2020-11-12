import { useFormik } from 'formik';
import { useState } from 'react';
import { storeProduct } from 'services/post_data_services';
import * as Yup from 'yup';
import useGetData from './useGetData';

function useNewProduct(status, state, groupID) {
  // TODO · Modifiicar el EndPoint Store de Productos para agregar el campo STATUS 11/10/2020

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [, , setUpdate] = useGetData();

  const initialValues = {
    description: '',
    name: '',
    price: '',
    state: '',
    status: '',
    value: '',
    group: ''
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      description: Yup.string().trim(),
      name: Yup.string().required('El campo NOMBRE es requerido.').trim(),
      price: Yup.number()
        .min(0, 'El PRECIO no puede ser menor a 0')
        .lessThan(Yup.ref('value'), 'El VALOR no puede ser mayor al PRECIO'),
      value: Yup.number()
        .required('El campo VALOR es requerido.')
        .min(0, 'El VALOR no puede ser menor a 0')
    }),
    onSubmit: async (val, { resetForm }) => {
      setLoading(true);

      val.description = val.description.trim();
      val.state = state;
      val.status = status;
      val.group = groupID;

      if (val.price === '') val.price = 0;

      const res = await storeProduct(val);

      if (!res.ok) {
        setError({
          message: 'Ocurrio un ERROR interno del servidor, intentelo nuevamente en un momento.'
        });
        console.log(res);
      }

      if (res.ok) {
        setError(false);
        setLoading(false);
        resetForm(formik.initialValues);
        setUpdate(true);
        console.log(res);
      }
    }
  });

  return [formik, loading, error];
}

export default useNewProduct;
