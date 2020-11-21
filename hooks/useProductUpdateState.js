import { SwalError } from 'helpers/toast-swal';
import { useEffect, useState } from 'react';
import { updateProduct } from 'services/update_data_services';
import useGetData from './useGetData';

function useProductUpdateState(STATE) {
  // const [error, setError] = useState(null);
  const [state, setState] = useState('');
  const [loadingUpdateState, setLoading] = useState(false);

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

  const productUpdateState = async (ID) => {
    const body = { state: newState() };

    setLoading(true);

    const res = await updateProduct(ID, body);

    if (!res.ok) {
      setLoading(false);
      SwalError(res.mensaje);
    }

    if (res.ok) {
      setUpdate(true);
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  };

  useEffect(() => {
    if (STATE === 'ACTIVE') {
      setState('A stock');
    } else {
      setState('A venta');
    }
  }, [STATE]);

  return [productUpdateState, loadingUpdateState, state];
}

export default useProductUpdateState;
