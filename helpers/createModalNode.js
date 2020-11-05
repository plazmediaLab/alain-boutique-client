export default function createModalNode() {
  if (!document.getElementById('modal_portal')) {
    const nextContainerApp = document.getElementById('__next');
    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('id', 'modal_portal');
    modalContainer.style.position = 'relative';
    document.body.insertBefore(modalContainer, nextContainerApp);
  }
}
