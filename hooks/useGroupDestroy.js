import { useState } from 'react';
import Swal from 'sweetalert2';
import useGetData from './useGetData';
import { destroyGoup } from 'services/delete_data_services';

function useGroupDestroy() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [, , setUpdate] = useGetData();

  const groupDestroy = async (ID) => {
    Swal.fire({
      title: '¿Estas seguro de querer eliminar este grupo?',
      text:
        'Todos los productor relacionados con este, tambíen serán eliminados - !Esta acción no podra ser revertida!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#635BFF',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      customClass: {
        container: '...',
        popup: '...',
        header: '...',
        title: 'swalTitle',
        closeButton: '...',
        icon: 'swalIcon',
        image: '...',
        content: 'swalText',
        input: '...',
        validationMessage: '...',
        actions: '...',
        confirmButton: '...',
        denyButton: '...',
        cancelButton: '...',
        loader: '...',
        footer: '....'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        const res = await destroyGoup(ID);

        if (!res.ok) {
          setLoading(false);
          Swal.fire('Error!', res.mensaje, 'error');
        }

        if (res.ok) {
          setLoading(false);
          setUpdate(true);
          Swal.fire('Eliminado!', 'El grupo, como sus productos han sido eliminados.', 'success');
        }
      }
    });
  };

  return [groupDestroy, loading, error];
}

export default useGroupDestroy;
