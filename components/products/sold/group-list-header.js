import formatSlug from 'helpers/formatSlug';
import { useState } from 'react';

export default function GroupListHeader({ slug, color, productsSold }) {
  const [disabled] = useState(true);

  const sortList = () => {
    console.log('Sort list...');
  };

  return (
    <section className="flex space-x-3 my-3 items-center">
      <h1 className="flex-1 font-light">
        <svg
          className="group w-6 h-6 inline-block mr-1 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        {formatSlug(slug[0])}
      </h1>
      <div className="flex items-center space-x-1" title="Color de etiqueta">
        <p className="text-gray-500 text-description">
          ( {productsSold} ) {productsSold > 1 ? 'vendidos' : 'vendido'}
        </p>
      </div>
      <button
        disabled={disabled}
        onClick={sortList}
        className={`bg-alain-blue-100 text-alain-blue-300 p-1 rounded-card ${
          !disabled && 'hover:bg-alain-blue-500 hover:text-white'
        }`}>
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <style jsx>{`
        svg.group {
          color: ${color};
        }
        button:active {
          background-color: '#635BFF';
          text: '#fff';
        }
      `}</style>
    </section>
  );
}
