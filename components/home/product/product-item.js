import rippleEffect from 'helpers/ripple-effect';
import { useState } from 'react';
import ProductButtonAction from './product-button-action';

export default function ProductItem({ item }) {
  const [open, setOpen] = useState(true);

  const formatMoney = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const openItem = (e) => {
    rippleEffect(e, 'rgba(99, 91, 255, 0.2)');
    setOpen(!open);
  };

  return (
    <>
      <li
        key={item._id}
        className="product-item grid text-sm border border-gray-300 rounded-card overflow-hidden font-light tracking-wide"
        id="ripple-container">
        <button className="text-gray-400 px-1 border-r border-gray-300">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="section-main grid p-2 relative overflow-hidden">
          <button
            onClick={(e) => openItem(e)}
            type="button"
            className="absolute w-full h-full"></button>
          <article className="w-full">
            <h3 className="text-title-item">{item.name}</h3>
            {/* <p className="text-description truncate w-1/2">{item.description}</p> */}
          </article>
          {/* <p>{item.status}</p> */}
          <p className="text-price">$ {formatMoney(item.price)}</p>
          <p className="text-price">$ {formatMoney(item.value)}</p>
        </div>
        <div className={`section-action grid items-end p-2 text-gray-500 ${open ? '' : 'hidden'}`}>
          <article className="text-description h-full w-full">{item.description}</article>
          <div className="button-actions flex space-x-2 items-center">
            <ProductButtonAction colorText="text-red-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </ProductButtonAction>
            <ProductButtonAction colorText="text-alain-blue-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </ProductButtonAction>
            <ProductButtonAction>A venta</ProductButtonAction>
          </div>
        </div>
      </li>
      <style global jsx>{`
        li.product-item {
          grid-template-columns: auto 1fr;
          grid-template-rows: repeat(2, auto);
        }
        li.product-item > div.section-main {
          grid-template-columns: 1fr auto auto;
          grid-column-gap: 1rem;
          grid-row-gap: 0.4rem;
        }
        li.product-item:not(:last-child) {
          margin-bottom: 0.4rem;
        }
        small {
          grid-column: span 2;
        }
        div.section-action {
          grid-column: 2 / 3;
          grid-template-columns: 1fr auto;
        }
        li.product-item div.button-actions {
        }
      `}</style>
    </>
  );
}
