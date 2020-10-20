import { AUTH_DATA, SET_ACSRF_AUTH, AUTH_LOGOUT } from '../types';

export default function (state, action) {
  switch (action.type) {
    case SET_ACSRF_AUTH:
      return {
        ...state,
        A_CSRF_Auth: true
      };
    case AUTH_DATA:
      return {
        ...state,
        user: action.payload
      };
    case AUTH_LOGOUT:
      return action.payload;

    default:
      return state;
  }
}
