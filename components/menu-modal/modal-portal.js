import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import Menu from './menu';

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
      <button className="absolute top-0 z-50 cursor-default" onClick={onClose}>
        <Menu />
      </button>
      <style jsx>{`
        button {
          height: ${h}px;
          width: ${w}px;
          background-color: rgba(0, 0, 0, 0.2);
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
