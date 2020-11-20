import { SwalError } from 'helpers/toast-swal';
import { useEffect, useState } from 'react';
import { updateProduct } from 'services/update_data_services';
import useGetData from './useGetData';

function useProductUpdate(STATE) {
  // const [error, setError] = useState(null);
  const [state, setState] = useState('');
  const [loadingUpdate, setLoading] = useState(false);

  const [, , setUpdate] = useGetData();

  let newState = () => {
    let result;
    switch (STATE) {
      case 'ACTIVE':
        result = 'STOCK';
        break;
      case 'STOCK':
        result = 'ACTIVE';
        break;
    }
    return result;
  };

  const productUpdate = async (ID) => {
    const body = { state: newState() };

    setLoading(true);

    const res = await updateProduct(ID, body);

    if (!res.ok) {
      setLoading(false);
      SwalError(res.mensaje);
    }

    if (res.ok) {
      setUpdate(true);
    }
  };

  useEffect(() => {
    if (STATE === 'ACTIVE') {
      setState('A stock');
    } else {
      setState('A venta');
    }
  }, [state]);

  return [productUpdate, loadingUpdate, state];
}

export default useProductUpdate;
