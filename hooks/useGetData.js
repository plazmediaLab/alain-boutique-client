import ProductsContext from 'context/Products/ProductsContext';
import { getCookie } from 'helpers/cookie';
import { useContext, useEffect, useState } from 'react';
import { getGroups, getParnerths, getProducts } from 'services/get_data_services';

export default function useGetData() {
  // TODO · Crear HOC para mostrar un componente en caso de haber un error 11/08/2020

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updateAll, setUpdateAll] = useState(false);
  const [updateProducts, setUpdateProducts] = useState(false);
  const [updateParnerths, setUpdateParnerths] = useState(false);

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

  const handleDataGroups = async () => {
    if (!success) setLoading(true);

    const resGropus = await getGroups(TOKEN);

    if (!resGropus.ok) {
      setError(true);
    }

    if (resGropus.ok) {
      setGroupsMethod(resGropus.groups);
      if (resGropus.groups.length > 0) {
        const { color, _id, slug } = resGropus.groups[0];
        setActiveGroupMethod({ color, _id, slug });
      } else {
        setActiveGroupMethod({ color: '#e2e8f0', _id: undefined, slug: undefined });
      }
    }

    if (!error) {
      setLoading(false);
      successMethod();
      setUpdateAll(false);
    }
  };

  const handleDataParnerths = async () => {
    if (!success) setLoading(true);

    const resParnerths = await getParnerths(TOKEN);

    if (!resParnerths.ok) {
      setError(true);
    }

    if (resParnerths.ok) {
      setParnerthsMethod(resParnerths.groups);
    }

    if (!error) {
      setLoading(false);
      successMethod();
      setUpdateParnerths(false);
    }
  };

  const handleDataProducts = async () => {
    if (!success) setLoading(true);

    const resProducts = await getProducts(TOKEN);

    if (!resProducts.ok) {
      setError(true);
    }

    if (resProducts.ok) {
      setProductsMethod(resProducts.products);
    }

    if (!error) {
      setLoading(false);
      successMethod();
      setUpdateProducts(false);
    }
  };

  useEffect(() => {
    if (!success || updateAll) {
      handleDataGroups();
      handleDataParnerths();
      handleDataProducts();
      setUpdateAll(false);
    }
  }, [updateAll]);

  useEffect(() => {
    if (!success || updateProducts) {
      handleDataProducts();
    }
  }, [updateProducts]);

  useEffect(() => {
    if (!success || updateParnerths) {
      handleDataParnerths();
    }
  }, [updateParnerths]);

  return [loading, error, setUpdateAll, setUpdateProducts, setUpdateParnerths];
}
