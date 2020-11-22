import { SwalError } from 'helpers/toast-swal';
import { useState } from 'react';
import { updateProduct } from 'services/update_data_services';
import useGetData from './useGetData';

function useProductUpdate() {
  // const [error, setError] = useState(null);
  const [loadingUpdate, setLoading] = useState(false);

  const [, , , setUpdateProducts] = useGetData();

  const productUpdate = async (ID, body) => {
    setLoading(true);

    const res = await updateProduct(ID, body);

    if (!res.ok) {
      setLoading(false);
      SwalError(res.mensaje);
    }

    if (res.ok) {
      setUpdateProducts(true);
      console.log(res);
    }
  };

  return [productUpdate, loadingUpdate];
}

export default useProductUpdate;
