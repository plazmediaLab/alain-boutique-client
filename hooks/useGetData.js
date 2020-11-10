import ProductsContext from 'context/Products/ProductsContext';
import { getCookie } from 'helpers/cookie';
import { useContext, useEffect, useState } from 'react';
import { getGroups, getParnerths, getProducts } from 'services/get_data_services';

export default function useGetData() {
  // TODO · Crear HOC para mostrar un componente en caso de haber un error 11/08/2020

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const productsContext = useContext(ProductsContext);
  const {
    success,
    successMethod,
    setGroupsMethod,
    setActiveGroupMethod,
    setParnerthsMethod,
    setProductsMethod
  } = productsContext;

  const TOKEN = getCookie('A-CSRF-COOKIE');

  const handleData = async () => {
    setLoading(true);

    const resProducts = await getProducts(TOKEN);
    const resParnerths = await getParnerths(TOKEN);
    const resGropus = await getGroups(TOKEN);

    if (!resProducts.ok || !resParnerths.ok || !resGropus.ok) {
      setError(true);
    }

    if (resProducts.ok) {
      setProductsMethod(resProducts.products);
    }
    if (resParnerths.ok) {
      setParnerthsMethod(resParnerths.groups);
    }
    if (resGropus.ok) {
      setGroupsMethod(resGropus.groups);
      const { color, _id, slug } = resGropus.groups[0];
      setActiveGroupMethod({ color, _id, slug });
    }

    if (!error) {
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
