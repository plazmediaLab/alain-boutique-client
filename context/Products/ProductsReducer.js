import {
  SUCCESS_ACTIVE,
  SET_PRODUCTS,
  SET_GROUPS,
  SET_PARNERTHS,
  SET_ACTIVE_GROUP
} from '../types';

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
    case SET_GROUPS:
      return {
        ...state,
        groups: action.payload
      };
    case SET_PARNERTHS:
      return {
        ...state,
        parnerths: action.payload
      };
    case SET_ACTIVE_GROUP:
      return {
        ...state,
        active_group: action.payload
      };

    default:
      return state;
  }
}
