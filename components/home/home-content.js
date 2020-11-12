import ProductsContext from 'context/Products/ProductsContext';
import { useContext, useEffect, useState } from 'react';

export default function HomeContent() {
  const [active, setActive] = useState([]);
  const [stock, setStock] = useState([]);

  const productsContext = useContext(ProductsContext);
  const { active_group = {}, products = [], groups = [], setActiveGroupMethod } = productsContext;

  useEffect(() => {
    setActive(products.filter((x) => x.state === 'ACTIVE'));
    setStock(products.filter((x) => x.state === 'STOCK'));
  }, [products]);

  const handleActiveGroup = (e) => {
    const { color, _id, slug } = groups.find((x) => x.slug === e.target.value);
    setActiveGroupMethod({ color, _id, slug });
  };

  return (
    <>
      <section className="w-full relative rounded-full">
        <div className="color-selector w-4 h-4 rounded-full absolute pointer-events-none"></div>
        <select
          disabled={!active_group._id}
          name="groups"
          id="groups"
          className={`rounded-full appearance-none w-full bg-transparent truncate px-8 py-2 cursor-pointer border border-gray-300 hover:border-gray-400 hover:shadow`}
          onChange={(e) => handleActiveGroup(e)}>
          {!active_group._id ? (
            <option value="" label="--- No tienes grupos creados ---"></option>
          ) : (
            groups.map((group) => (
              <option
                value={group.slug}
                defaultValue={'EMPTY'}
                key={group._id}
                selected={group.slug === active_group.slug}>
                {group.name}
              </option>
            ))
          )}
        </select>
        <svg
          className="w-5 h-5 absolute pointer-events-none text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </section>
      <hr className="my-2 sm:my-3" />
      <ul>
        {active.map((item) => (
          <p key={item._id}>Product...</p>
        ))}
      </ul>
      <style jsx>{`
        div.color-selector {
          top: calc(50% - 0.5rem);
          left: 0.7rem;
          background-color: ${Object.keys(active_group).length > 0
            ? active_group.color
            : '#e2e8f0'};
        }
        svg {
          top: calc(50% - 0.6rem);
          right: 0.7rem;
        }
        select:disabled {
          opacity: 50%;
          cursor: not-allowed;
          color: #a0aec0;
        }
      `}</style>
    </>
  );
}
