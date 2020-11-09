import { useReducer } from 'react';
import {
  SUCCESS_ACTIVE,
  SET_PRODUCTS,
  SET_PARNERTHS,
  SET_GROUPS,
  SET_ACTIVE_GROUP
} from '../types';
import ProductsContext from './ProductsContext';
import ProductsReducer from './ProductsReducer';

const ProductsState = ({ children }) => {
  // Initial State
  const initialState = {
    active_group: {},
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
  const setGroupsMethod = (data) => {
    dispath({
      type: SET_GROUPS,
      payload: data
    });
  };
  const setParnerthsMethod = (data) => {
    dispath({
      type: SET_PARNERTHS,
      payload: data
    });
  };
  const setActiveGroupMethod = (data) => {
    dispath({
      type: SET_ACTIVE_GROUP,
      payload: data
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        active_group: state.active_group,
        groups: state.groups,
        parnerths: state.parnerths,
        products: state.products,
        success: state.success,
        setActiveGroupMethod,
        successMethod,
        setGroupsMethod,
        setParnerthsMethod,
        setProductsMethod
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
