import { SUCCESS_ACTIVE, SET_PRODUCTS } from '../types';

export default function ProductsReducer(state, action) {
  switch (action.type) {
    case SUCCESS_ACTIVE:
      return {
        ...state,
        success: true
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
}
