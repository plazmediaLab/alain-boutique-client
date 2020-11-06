import { useReducer } from 'react';
import {} from '../types';
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

  return (
    <ProductsContext.Provider
      value={{
        groups: state.groups,
        parnerths: state.parnerths,
        products: state.products,
        success: state.success
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
