import ModalPortal from 'components/menu-modal/modal-portal';
import { useState } from 'react';

export default function ModalBtn() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        className={`w-10 h-10 grid place-items-center rounded-full ${
          open ? 'bg-alain-blue-100 text-alain-blue-400' : ''
        }`}
        onClick={handleOpenModal}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && <ModalPortal onClose={handleOpenModal} />}
    </>
  );
}
