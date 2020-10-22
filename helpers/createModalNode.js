export default function createModalNode() {
  if (!document.getElementById('modal_portal')) {
    const nextContainerApp = document.getElementById('__next');
    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('id', 'modal_portal');
    document.body.insertBefore(modalContainer, nextContainerApp);
  }
}
