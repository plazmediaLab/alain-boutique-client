import { AUTH_DATA } from '../types';

export default function (state, action) {
  switch (action.type) {
    case AUTH_DATA:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}
