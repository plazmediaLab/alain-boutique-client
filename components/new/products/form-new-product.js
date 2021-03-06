import ErrorMsn from 'components/resources/error-msn';
import LoadingIcon from 'components/resources/loading-icon';
import ProductsContext from 'context/Products/ProductsContext';
import useProductNew from 'hooks/useProductNew';
import { useContext, useState } from 'react';
import MessageEmptyGroup from './message-empty-group';

export default function FormNewProduct() {
  const [status, setStatus] = useState('USED');
  const [state, setState] = useState('STOCK');

  const productsContext = useContext(ProductsContext);
  const { active_group = {} } = productsContext;

  const [formik, loading] = useProductNew(status, state, active_group._id, setStatus, setState);

  return (
    <>
      {!active_group._id && <MessageEmptyGroup />}
      <form
        className="border border-gray-300 rounded-card border-t-8 overflow-hidden"
        onSubmit={formik.handleSubmit}>
        <div className="p-3">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del producto"
            className="border-b border-gray-300 w-full p-2 text-sm mb-5 focus:border-alain-blue-500"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <section className="grid grid-cols-2 gap-4 mb-5">
            <input
              type="number"
              name="price"
              id="price"
              placeholder="$0 / Precio"
              className="appearance-none border-b border-gray-300 p-2 text-sm focus:border-alain-blue-500"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            <input
              type="number"
              name="value"
              id="value"
              placeholder="$50 / Valor de venta"
              className="appearance-none border-b border-gray-300 p-2 text-sm focus:border-alain-blue-500"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.value}
            />
          </section>
          <section className="grid grid-cols-2 gap-4 mb-5">
            <div className="relative">
              <select
                name="status"
                id="status"
                className="cursor-pointer w-full font-light tracking-wider appearance-none border-b border-gray-300 py-2 px-6 text-sm focus:border-alain-blue-500"
                onChange={(e) => setStatus(e.target.value)}>
                <option value="USED" defaultValue="USED" selected={status === 'USED'}>
                  USADO
                </option>
                <option value="NEW" defaultValue="NEW" selected={status === 'NEW'}>
                  NUEVO
                </option>
                <option
                  value="PROMOTION"
                  defaultValue="PROMOTION"
                  selected={status === 'PROMOTION'}>
                  LIQUIDACIÓN
                </option>
              </select>
              {status === 'PROMOTION' ? (
                <svg
                  className="w-5 h-5 absolute icon text-alain-blue-300"
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
                  className={`w-5 h-5 absolute icon ${
                    status === 'USED' ? 'text-gray-400' : 'text-green-500'
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
              <svg
                className="w-5 h-5 absolute arrow text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="relative">
              <select
                name="state"
                id="state"
                className="cursor-pointer w-full font-light tracking-wider appearance-none border-b border-gray-300 py-2 px-6 text-sm focus:border-alain-blue-500"
                onChange={(e) => setState(e.target.value)}>
                <option value="STOCK" selected={state === 'STOCK'}>
                  STOCK
                </option>
                <option value="ACTIVE" selected={state === 'ACTIVE'}>
                  ACTIVO
                </option>
              </select>
              <svg
                className={`w-5 h-5 absolute icon ${
                  state === 'STOCK' ? 'text-gray-400' : 'text-yellow-500'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="w-5 h-5 absolute arrow text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </section>
          <div className="relative">
            <span className="off p-small rounded bg-red-200 absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="#fff">
                <path d="M16 17H5V7h11l3.55 5m-1.92-6.16C17.27 5.33 16.67 5 16 5H5c-1.1 0-2 .9-2 2v10a2 2 0 002 2h11c.67 0 1.27-.34 1.63-.85L22 12l-4.37-6.16M13.8 8L15 9.2 8.2 16 7 14.8m1.45-6.77c.78 0 1.42.64 1.42 1.42s-.64 1.42-1.42 1.42-1.42-.64-1.42-1.42.64-1.42 1.42-1.42m5.1 5.1c.78 0 1.42.64 1.42 1.42 0 .78-.64 1.42-1.42 1.42-.78 0-1.42-.64-1.42-1.42 0-.78.64-1.42 1.42-1.42z" />
              </svg>
            </span>
            <input
              type="number"
              name="off"
              id="off"
              placeholder="0% descuento"
              className="border-b border-gray-300 w-full pl-10 p-2 text-sm mb-5 focus:border-alain-blue-500"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.off}
            />
          </div>
          <textarea
            name="description"
            id="description"
            placeholder="Comentario"
            rows="2"
            className={`${
              Object.keys(formik.errors).length > 0 ? '' : 'mb-5'
            } w-full resize-none border-b border-gray-300 p-2 text-sm focus:border-alain-blue-500`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}></textarea>
          {formik.touched.name && formik.errors.name ? (
            <ErrorMsn message={formik.errors.name} mt="mt-2" mb="mb-0" />
          ) : null}
          {formik.touched.price && formik.errors.price ? (
            <ErrorMsn message={formik.errors.price} mt="mt-2" mb="mb-0" />
          ) : null}
          {formik.touched.value && formik.errors.value ? (
            <ErrorMsn message={formik.errors.value} mt="mt-2" mb="mb-0" />
          ) : null}
        </div>
        <button
          disabled={!active_group._id || (loading || formik.isValid ? false : true)}
          type="submit"
          className="w-full bg-teal-500 text-white p-3 text-sm uppercase font-light tracking-wider flex justify-center relative">
          {loading ? <LoadingIcon fill="#fff" w="21" h="21" /> : 'Agregar producto'}
        </button>
        {/* name price value description state status group */}
      </form>
      <style jsx>{`
        form {
          border-top-color: ${Object.keys(active_group).length > 0
            ? active_group.color
            : '#e2e8f0'};
          background-color: transparent;
        }
        svg.icon {
          top: calc(50% - 0.7rem);
          pointer-events: none;
        }
        svg.arrow {
          top: calc(50% - 0.7rem);
          pointer-events: none;
          right: 0.5rem;
        }
        span.off {
          top: 0.3rem;
          left: 0rem;
        }
      `}</style>
    </>
  );
}
