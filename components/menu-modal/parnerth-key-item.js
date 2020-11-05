import { useState } from 'react';
import copy from 'copy-text-to-clipboard';
import ReactDOM from 'react-dom';

export default function ParnerthKeyItem({ parnerth_key }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const handlekey = () => {
    copy(parnerth_key);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1000);
  };

  return (
    <div className="font-light text-xs flex">
      <div className="flex-1">
        <p>Clave de socio:</p>
        <svg
          className="w-4 h-4 inline-block mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium tracking-wider text-sm">{parnerth_key}</span>
      </div>
      <button className="p-2 rounded-full text-gray-400" onClick={handlekey}>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </button>
      {copySuccess
        ? ReactDOM.createPortal(
            <p className="rounded-full bg-carbon-900 opacity-50 mx-auto px-3 py-2 text-xs text-white">
              Código copiado:{' '}
              <span className="font-medium tracking-wider text-sm">{parnerth_key}</span>
            </p>,
            document.getElementById('copy-clipboard')
          )
        : null}
    </div>
  );
}
