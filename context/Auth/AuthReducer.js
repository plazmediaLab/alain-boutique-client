import { AUTH_LOGIN, AUTH_LOGOUT } from '../types';

export default function AuthReducer(state, action) {
  switch (action.type) {
    case AUTH_LOGIN:
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
