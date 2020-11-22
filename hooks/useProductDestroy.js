import { SwalError, Toast } from 'helpers/toast-swal';
import { useState } from 'react';
import { destroyProduct } from 'services/delete_data_services';
import Swal from 'sweetalert2';
import useGetData from './useGetData';

function useProductDestroy() {
  // const [error, setError] = useState(null);
  const [loadingDestroy, setLoading] = useState(false);

  const [, , , setUpdateProducts] = useGetData();

  const productDestoy = async (ID) => {
    Swal.fire({
      title: '¿Estas seguro de querer eliminar este producto?',
      text: '!Esta acción no podra ser revertida!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#635BFF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      customClass: {
        title: 'swalTitle',
        icon: 'swalIcon',
        content: 'swalText'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);

        const res = await destroyProduct(ID);

        if (!res.ok) {
          setLoading(false);
          SwalError(res.mensaje);
        }

        if (res.ok) {
          setLoading(false);
          setUpdateProducts(true);
          Toast.fire({
            icon: 'success',
            title: 'El grupo se elimino correctamente.'
          });
        }
      }
    });
  };

  return [productDestoy, loadingDestroy /*, error*/];
}

export default useProductDestroy;
