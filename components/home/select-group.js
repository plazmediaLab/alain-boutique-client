import ProductsContext from 'context/Products/ProductsContext';
import countStateProducts from 'helpers/count-state-products';
import { useContext, useEffect } from 'react';

export default function SelectGroup({ state, setProductsList, setCountProducts }) {
  const productsContext = useContext(ProductsContext);
  const { active_group = {}, products = [], groups = [], setActiveGroupMethod } = productsContext;

  const handleActiveGroup = (e) => {
    const { color, _id, slug } = groups.find((x) => x.slug === e.target.value);
    setActiveGroupMethod({ color, _id, slug });
  };

  useEffect(() => {
    if (products.length > 0) {
      setProductsList(
        products.filter((x) => x.state === state && x.group[0]._id === active_group._id)
      );
    } else {
      setProductsList([]);
    }
  }, [products, active_group, state]);
  useEffect(() => {
    const count = countStateProducts(products, active_group._id);
    setCountProducts(count);
  }, [products, active_group]);

  return (
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
      <style jsx>{`
        div.color-selector {
          top: calc(50% - 0.5rem);
          left: 0.7rem;
          background-color: ${active_group.color};
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
    </section>
  );
}
