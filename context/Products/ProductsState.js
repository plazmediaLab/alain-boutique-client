import { useReducer } from 'react';
import { SUCCESS_ACTIVE, SET_PRODUCTS } from '../types';
import ProductsContext from './ProductsContext';
import ProductsReducer from './ProductsReducer';

const ProductsState = ({ children }) => {
  // Initial State
  const initialState = {
    groups: undefined,
    parnerths: undefined,
    products: undefined,
    success: false
  };

  // Reducer
  const [state, dispath] = useReducer(ProductsReducer, initialState);

  // Process Methods
  const successMethod = () => {
    dispath({
      type: SUCCESS_ACTIVE
    });
  };
  const setProductsMethod = (data) => {
    dispath({
      type: SET_PRODUCTS,
      payload: data
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        groups: state.groups,
        parnerths: state.parnerths,
        products: state.products,
        success: state.success,
        successMethod,
        setProductsMethod
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
