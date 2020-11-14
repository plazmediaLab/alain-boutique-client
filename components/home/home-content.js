import { useState } from 'react';
import SelectGroup from './select-group';
import SwitchProduct from './switch-product';

export default function HomeContent() {
  const [productsList, setProductsList] = useState([]);
  const [state, setState] = useState('');
  const [countProducts, setCountProducts] = useState({});

  const formatMoney = (number) => {
    return new Intl.NumberFormat().format(number);
  };

  return (
    <>
      <SelectGroup
        state={state}
        setProductsList={setProductsList}
        setCountProducts={setCountProducts}
      />
      <hr className="my-2 sm:my-3" />
      <SwitchProduct setState={setState} countProducts={countProducts} />
      <ul className="my-3">
        {productsList.map((item) => (
          <li
            key={item._id}
            className="grid text-sm p-2 border border-gray-300 rounded-card shadow">
            <h3>{item.name}</h3>
            {/* <p>{item.status}</p> */}
            <p>$ {formatMoney(item.price)}</p>
            <p>$ {formatMoney(item.value)}</p>
            <small className="text-xs">{item.description}</small>
          </li>
        ))}
      </ul>
      <style jsx>{`
        li {
          grid-template-columns: 1fr auto auto;
          grid-column-gap: 1rem;
          grid-row-gap: 0.4rem;
        }
        small {
          grid-column: span 2;
        }
        li:not(:last-child) {
          margin-bottom: 0.4rem;
        }
      `}</style>
    </>
  );
}
