import ComponentPortalRender from 'components/resources/ComponentPortalRender';
import LoadingIcon from 'components/resources/loading-icon';
import accordionListMethod from 'helpers/accordionListMethod';
import useProductDestroy from 'hooks/useProductDestroy';
import useProductUpdate from 'hooks/useProductUpdate';
import ProductButtonAction from './product-button-action';

export default function ProductItem({ item }) {
  const [productDestoy, loadingDestroy] = useProductDestroy();
  const [productUpdate, loadingUpdate, state] = useProductUpdate(item.state);

  const formatMoney = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  const openItem = (e) => {
    const element = e.currentTarget;
    element.disabled = true;

    accordionListMethod(e)
      .then((disabled) => {
        element.disabled = disabled;
      })
      .catch((err) => {
        console.log(err);
        element.disabled = false;
      });
  };

  return (
    <>
      <li
        key={item._id}
        className="grid text-sm rounded-card overflow-hidden font-light tracking-wide shadow-item">
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
        <div className="section-main grid col-gap-1 p-2 relative">
          <button
            onClick={(e) => openItem(e)}
            type="button"
            className="absolute w-full h-full "
            disabled={loadingDestroy}></button>
          <article className="w-full truncate pr-8">
            <h3 className="text-title-item">{item.name}</h3>
            <p className="text-description truncate text-gray-500">{item.description}</p>
          </article>
          {/* <p>{item.status}</p> */}
          {/* {/* <p className="text-price font-medium">${formatMoney(item.price)}</p> */}
          <div className={`price ${item.off > 0 ? 'grid grid-cols-2 items-end' : ''}`}>
            {item.off > 0 ? <p className="mr-1 text-xs text-red-500">-%{item.off}</p> : null}
            {item.value_off > 0 ? (
              <p className="text-price font-medium text-green-600">
                ${formatMoney(item.value_off)}
              </p>
            ) : null}
            <p
              className={`text-price ${
                item.value_off > 0
                  ? 'text-gray-500 font-light line-through col-start-2'
                  : 'text-alain-blue-500 font-medium'
              }`}>
              ${formatMoney(item.value)}
            </p>
          </div>
          {item.status === 'PROMOTION' ? (
            <svg
              className="w-4 h-4 mt-small text-alain-blue-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className={`w-4 h-4 mt-small ${
                item.status === 'NEW' ? 'text-green-400' : 'text-gray-400'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="border-r border-gray-300"></div>
        <div
          className={`section-action text-description grid items-center col-gap-2 row-gap-4 p-2 text-slate-gray-400 hidden`}
          id={item._id}>
          <article className="h-full w-full col-span-2">
            <p className="font-medium">
              Precio de entrada:
              <span className="text-alain-blue-500 font-light">&nbsp; ${item.price}</span>
            </p>
            <span className="font-medium">Descripción: </span>
            {item.description}
          </article>
          <p
            title="Hace 2 horas"
            className="bg-slate-gray-100 rounded-full block py-small px-3 text-slate-gray-300">
            Hace 2 horas
          </p>
          <div className="button-actions flex space-x-2 items-center justify-end">
            <ProductButtonAction
              colorText="text-red-400"
              onClick={() => productDestoy(item._id)}
              disabled={loadingDestroy}>
              {loadingDestroy ? (
                <LoadingIcon h="16" w="16" fill="#90A4AE" />
              ) : (
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
              )}
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
            <ProductButtonAction
              disabled={loadingUpdate}
              onClick={() => productUpdate(item._id)}
              colorText={item.state === 'STOCK' ? 'text-alain-blue-500' : ''}>
              {loadingUpdate ? <LoadingIcon h="16" w="16" fill="#90A4AE" /> : state}
            </ProductButtonAction>
          </div>
        </div>
      </li>
      <ComponentPortalRender render={loadingUpdate || loadingDestroy}>
        <div className="w-full h-full bg-slate-gray-100 absolute top-0 z-50 opacity-25"></div>
      </ComponentPortalRender>
      <style jsx>{`
        li {
          grid-template-columns: auto 1fr;
          grid-template-rows: repeat(2, auto);
        }
        li div.section-main {
          grid-template-columns: 1fr auto auto;
          grid-row-gap: 0.4rem;
        }
        small {
          grid-column: span 2;
        }
        div.section-action {
          grid-column: 2 / 3;
          grid-template-columns: auto 1fr;
        }
        div.price {
          grid-template-columns: 1fr auto;
        }
      `}</style>
    </>
  );
}
