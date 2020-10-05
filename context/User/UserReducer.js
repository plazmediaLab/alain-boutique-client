import {
  TYPE_CASE
} from '../types';

export default ( state, action ) => {
  switch (action.type) {
    case TYPE_CASE:
      return{
        ...state,
        //...
      }
  
    default:
      return state;
  }
};