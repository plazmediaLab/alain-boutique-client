import { useReducer } from 'react';
import {} from '../types';
import ProductsContext from './ProductsContext';
import ProductsReducer from './ProductsReducer';

const ProductsState = ({ children }) => {
  // Initial State
  const initialState = {
    products: undefined
  };

  // Reducer
  const [state, dispath] = useReducer(ProductsReducer, initialState);

  return (
    <ProductsContext.Provider value={{ products: state.products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
