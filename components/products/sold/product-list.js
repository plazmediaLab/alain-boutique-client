import { useEffect, useState } from 'react';
import ProductSoldItem from './product-sold-item';

export default function ProductList({ active_group, products }) {
  const [productList, setProductList] = useState([]);

  console.log(products.filter((x) => x.group[0]._id === active_group._id && x.state === 'SOLD'));

  useEffect(() => {
    if (products.length > 0) {
      const list = products.filter(
        (x) => x.group[0]._id === active_group._id && x.state === 'SOLD'
      );
      setProductList(list);
    }
  }, [products]);

  return (
    <>
      <ul>
        {productList.map((item) => (
          <ProductSoldItem key={item._id} item={item} />
        ))}
        <style jsx>{`
          ul :global(li:not(:last-child)) {
            margin-bottom: 0.6rem;
          }
        `}</style>
      </ul>
    </>
  );
}
