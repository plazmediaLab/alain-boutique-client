import { AUTH_LOGIN, AUTH_LOGOUT, SET_USER } from '../types';

export default function AuthReducer(state, action) {
  switch (action.type) {
    case AUTH_LOGIN:
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        logged: true
      };
    case AUTH_LOGOUT:
      return action.payload;
    // case TYPE_TEST:
    //   return {
    //     ...state,
    //     A_CSRF_Auth: true
    //   };

    default:
      return state;
  }
}
