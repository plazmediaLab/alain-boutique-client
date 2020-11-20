import ReactDOM from 'react-dom';

function ComponentPortalRender({ children, container = 'main', render = false }) {
  return (
    render &&
    ReactDOM.createPortal(
      <div className="w-full h-full bg-slate-gray-100 absolute top-0 z-50 opacity-25">
        {children}
      </div>,
      document.getElementById(container)
    )
  );
}

export default ComponentPortalRender;
