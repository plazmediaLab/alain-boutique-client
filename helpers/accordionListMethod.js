import rippleEffect from './ripple-effect';

function accordionListMethod(e) {
  const currentSectionAction = e.target.parentNode.parentNode.querySelector('.section-action');
  const listitemsHidden = document.querySelectorAll('.section-action');

  return new Promise((resolve, reject) => {
    if (!listitemsHidden || !currentSectionAction)
      reject(
        new Error('Error al ejecutar la acción OPEN de la lista de productos, intenta nuevamente.')
      );

    if (currentSectionAction) rippleEffect(e, 'rgba(144, 164, 174, 0.18)');

    listitemsHidden.forEach((element) => {
      element.classList.add('hidden');
      if (element.classList.contains('open') && element.id !== currentSectionAction.id) {
        element.classList.remove('open');
      }
      if (element.id === currentSectionAction.id && !element.classList.contains('open')) {
        element.classList.add('open');
        element.classList.remove('hidden');
      } else {
        element.classList.remove('open');
        element.classList.add('hidden');
      }
      return resolve(false); // ¡Todo salió bien!
    });
  });
}

export default accordionListMethod;
