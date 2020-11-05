import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import Menu from './menu';

function ArrowModal() {
  return (
    <>
      <svg viewBox="0 0 48.29 28.98" className="w-6 h-6 z-40">
        <title>{'arrow-modal-menu'}</title>
        <g data-name="Capa 2">
          <path d="M0 29L19 2.8a6.22 6.22 0 0110.39 0L48.29 29z" fill="#fff" data-name="Capa 1" />
        </g>
      </svg>
      <style jsx>{`
        svg {
          top: 25px;
          left: 1.2rem;
          position: absolute;
        }
      `}</style>
    </>
  );
}

function ModalDev({ onClose }) {
  const [h, setH] = useState('0px');
  const [w, setW] = useState('0px');

  useEffect(() => {
    if (process.browser) {
      const dimentions = document.getElementById('main');
      setH(dimentions.clientHeight);
      setW(dimentions.clientWidth);
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 z-50">
        <ArrowModal />
        <Menu className="z-30" />
        <button className="absolute top-0 cursor-default" onClick={onClose}></button>
      </div>
      <style jsx>{`
        div {
          height: ${h}px;
          width: ${w}px;
          background-color: rgba(0, 0, 0, 0.01);
        }
        button {
          height: ${h}px;
          width: ${w}px;
        }
      `}</style>
    </>
  );
}

export default function ModalPortal({ onClose }) {
  return ReactDOM.createPortal(
    <ModalDev onClose={onClose} />,
    document.getElementById('portal_node')
  );
}
