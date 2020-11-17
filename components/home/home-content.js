import { useState } from 'react';
import ProductItem from './product/product-item';
import SelectGroup from './select-group';
import SwitchProduct from './switch-product';

export default function HomeContent() {
  const [productsList, setProductsList] = useState([]);
  const [state, setState] = useState('');
  const [countProducts, setCountProducts] = useState({});

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
    </>
  );
}
