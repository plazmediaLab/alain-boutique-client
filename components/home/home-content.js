import { useState } from 'react';
import ProductItem from './product/product-item';
import SelectGroup from './select-group';
import SwitchProduct from './switch-product';

export default function HomeContent() {
  const [productsList, setProductsList] = useState([]);
  const [state, setState] = useState('');
  const [countProducts, setCountProducts] = useState({});
  const [countProductsSold, setCountProductsSold] = useState(0);

  return (
    <>
      <SelectGroup
        state={state}
        setProductsList={setProductsList}
        setCountProducts={setCountProducts}
        setCountProductsSold={setCountProductsSold}
      />
      <hr className="my-2" />
      <SwitchProduct
        setState={setState}
        countProducts={countProducts}
        countProductsSold={countProductsSold}
      />
      <ul className="product-list my-3">
        {productsList.map((item) => (
          <ProductItem item={item} key={item._id} productsActive={state} />
        ))}
      </ul>
    </>
  );
}
