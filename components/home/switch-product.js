import ProductsContext from 'context/Products/ProductsContext';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

export default function SwitchProduct({ setState, countProducts, countProductsSold }) {
  const [value, setValue] = useState(false);

  const productsContext = useContext(ProductsContext);
  const { active_group = {} } = productsContext;

  useEffect(() => {
    setState(value);
  }, [value]);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <section className="grid gap-3 w-full items-center">
      <p className="text-xs uppercase text-gray-500 font-light">Productos</p>
      <input
        className="hidden"
        type="checkbox"
        name="switch-state"
        id="switch-state"
        onChange={handleChange}
        checked={value}
      />
      <label
        htmlFor="switch-state"
        className="flex items-center justify-between relative cursor-pointer border border-gray-300 bg-gray-200 rounded-full w-full">
        <span className="switch rounded-full bg-white shadow w-1/2" id="switch" />
        <div className="grid items-center justify-around grid-cols-2 w-full text-center text-xs uppercase font-medium">
          <p
            className={`transition-opacity duration-200 inline-block ${
              !value ? 'opacity-100 text-alain-blue-500' : 'opacity-25 text-alain-blue-900'
            }`}>
            En venta &nbsp;<span className="font-light">({countProducts.active})</span>
          </p>
          <p
            className={`transition-opacity duration-200 inline-block ${
              value ? 'opacity-100 text-alain-blue-500' : 'opacity-25 text-alain-blue-900'
            }`}>
            Total &nbsp;<span className="font-light">({countProducts.total})</span>
          </p>
        </div>
      </label>
      {countProductsSold > 0 ? (
        <Link href={`/products/sold/${active_group.slug}`}>
          <a className="text-alain-blue-500 text-label uppercase py-2">
            {countProductsSold} Vendido(s)
          </a>
        </Link>
      ) : (
        <p className="text-gray-500 text-label uppercase">0 Vendido(s)</p>
      )}
      <style jsx>{`
        section {
          grid-template-columns: auto 1fr auto;
        }
        label {
          height: 34px;
          transition: background-color 0.2s;
        }
        span.switch {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          height: 26px;
          transition: 0.2s;
        }
        input[type='checkbox']:checked + label > span {
          left: calc(100% - 3px);
          transform: translateX(-100%);
        }
        label:active span {
          width: 80%;
        }
        p {
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
