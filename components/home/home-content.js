import useProductDestroy from 'hooks/useProductDestroy';
import { useState } from 'react';
import ProductItem from './product/product-item';
import SelectGroup from './select-group';
import SwitchProduct from './switch-product';
import ReactDOM from 'react-dom';

export default function HomeContent() {
  const [productsList, setProductsList] = useState([]);
  const [state, setState] = useState('');
  const [countProducts, setCountProducts] = useState({});

  const [, loadingDestroy] = useProductDestroy();

  return (
    <>
      <SelectGroup
        state={state}
        setProductsList={setProductsList}
        setCountProducts={setCountProducts}
      />
      <hr className="my-2 sm:my-3" />
      <SwitchProduct setState={setState} countProducts={countProducts} />
      <ul className="product-list my-3">
        {productsList.map((item) => (
          <ProductItem item={item} key={item._id} />
        ))}
      </ul>
      {loadingDestroy &&
        ReactDOM.createPortal(
          <div className="w-full h-full bg-slate-gray-100 absolute top-0 z-50 opacity-25"></div>,
          document.getElementById('main')
        )}
    </>
  );
}
