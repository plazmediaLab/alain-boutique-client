import { useState } from 'react';
import useGetData from './useGetData';
import { destroyGoup } from 'services/delete_data_services';
import { SwalError, Toast } from 'helpers/toast-swal';
import Swal from 'sweetalert2';

function useGroupDestroy() {
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [, , setUpdateAll] = useGetData();

  const groupDestroy = async (ID) => {
    Swal.fire({
      title: '¿Estas seguro de querer eliminar este producto?',
      text:
        'Todos los productor relacionados con este, tambíen serán eliminados - !Esta acción no podra ser revertida!',
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
        const res = await destroyGoup(ID);

        if (!res.ok) {
          setLoading(false);
          SwalError(res.mensaje);
        }

        if (res.ok) {
          setLoading(false);
          setUpdateAll(true);
          Toast.fire({
            icon: 'success',
            title: 'El grupo se elimino correctamente.'
          });
        }
      }
    });
  };

  return [
    groupDestroy,
    loading,
    {
      /*error*/
    }
  ];
}

export default useGroupDestroy;
