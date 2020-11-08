import ProductsContext from 'context/Products/ProductsContext';
import { getCookie } from 'helpers/cookie';
import { useContext, useEffect, useState } from 'react';
import { getProducts } from 'services/get_data_services';

export default function useGetData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const productsContext = useContext(ProductsContext);
  const { success, successMethod, setProductsMethod } = productsContext;

  const TOKEN = getCookie('A-CSRF-COOKIE');

  const handleData = async () => {
    setLoading(true);

    const resProducts = await getProducts(TOKEN);

    if (!resProducts.ok) {
      setError(true);
    }

    if (resProducts.ok) {
      setProductsMethod(resProducts.products);
      setLoading(false);
      successMethod();
    }
  };

  useEffect(() => {
    if (!success) {
      handleData();
    }
  }, []);

  return [loading, error];
}
