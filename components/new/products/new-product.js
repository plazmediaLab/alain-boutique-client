import ProductsContext from 'context/Products/ProductsContext';
import { useContext } from 'react';

export default function NewProduct() {
  const productsContext = useContext(ProductsContext);
  const { active_group = {}, groups = [], setActiveGroupMethod } = productsContext;

  const handleActiveGroup = (e) => {
    const { color, _id, slug } = groups.find((x) => x.slug === e.target.value);
    setActiveGroupMethod({ color, _id, slug });
  };
  return (
    <>
      <div className="flex items-center space-x-2 rounded-card border border-gray-300 p-1 mb-3">
        <button className="bg-gray-100 text-red-300 w-8 h-8 grid place-items-center rounded">
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <select
          name="groups"
          id="groups"
          className={`group flex-1 appearance-none w-full bg-transparent truncate p-1 cursor-pointer`}
          onChange={(e) => handleActiveGroup(e)}>
          {groups.map((group) => (
            <option
              value={group.slug}
              key={group._id}
              selected={group.slug === active_group.slug}
              className="text-alain-blue-800">
              {group.name}
            </option>
          ))}
        </select>
        <button className="text-alain-blue-400 bg-alain-blue-100 w-8 h-8 grid place-items-center rounded">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
          </svg>
        </button>
      </div>
      <form className="border border-gray-300 rounded-card border-t-4 overflow-hidden">
        <div className="p-2">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del producto"
            className="border-b border-gray-300 w-full p-2 text-sm mb-4 focus:border-alain-blue-500"
          />
          <section className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="number"
              name="price"
              id="price"
              placeholder="$30 / Precio"
              className="appearance-none border-b border-gray-300 p-2 text-sm focus:border-alain-blue-500"
            />
            <input
              type="number"
              name="price"
              id="price"
              placeholder="$50 / Valor de venta"
              className="appearance-none border-b border-gray-300 p-2 text-sm focus:border-alain-blue-500"
            />
          </section>
          <section className="grid grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <select
                name="status"
                id="status"
                className="cursor-pointer w-full font-medium appearance-none border-b border-gray-300 py-2 px-6 text-sm focus:border-alain-blue-500">
                <option value="USED">USADO</option>
                <option value="NEW">NUEVO</option>
              </select>
              <svg
                className="w-5 h-5 absolute icon"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
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
            <div className="relative">
              <select
                name="state"
                id="state"
                className="cursor-pointer w-full font-medium appearance-none border-b border-gray-300 py-2 px-6 text-sm focus:border-alain-blue-500">
                <option value="STOCK">STOCK</option>
                <option value="ACTIVE">EN VENTA</option>
                <option value="SALE">VENDIDO</option>
              </select>
              <svg
                className="w-5 h-5 absolute icon"
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
          <textarea
            name="description"
            id="description"
            placeholder="Comentario"
            rows="4"
            className="mb-4 w-full resize-none border-b border-gray-300 p-2 text-sm focus:border-alain-blue-500"></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white p-3 text-sm uppercase font-light tracking-wider">
          Agregar producto
        </button>
        {/* name price value description state status group */}
      </form>
      <style jsx>{`
        select.group {
          color: ${Object.keys(active_group).length > 0 ? active_group.color : '#e2e8f0'};
        }
        form {
          border-top-color: ${Object.keys(active_group).length > 0
            ? active_group.color
            : '#e2e8f0'};
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
      `}</style>
    </>
  );
}
