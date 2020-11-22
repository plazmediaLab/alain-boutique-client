import { useEffect, useState } from 'react';
import ProductSoldItem from './product-sold-item';

export default function ProductList({ active_group, products }) {
  const [productList, setProductList] = useState([]);

  const sortDateOld = (LIST = []) => {
    LIST.sort(function (a, b) {
      return new Date(a.sold_date) - new Date(b.sold_date);
    });
    // Function content ...
    return LIST;
  };
  const sortDateRecent = (LIST = []) => {
    LIST.sort(function (a, b) {
      return new Date(b.sold_date) - new Date(a.sold_date);
    });
    // Function content ...
    return LIST;
  };

  useEffect(() => {
    if (products.length > 0) {
      let list = products.filter((x) => x.group[0]._id === active_group._id && x.state === 'SOLD');
      list = sortDateRecent(list);
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
