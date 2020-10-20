import { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import { AUTH_DATA, SET_ACSRF_AUTH, AUTH_LOGOUT } from '../types';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    A_CSRF_Auth: null,
    user: null
  };

  const [state, dispath] = useReducer(UserReducer, initialState);

  const setACSRFMethod = () => {
    dispath({
      type: SET_ACSRF_AUTH
    });
  };
  const setUserMethod = (user) => {
    dispath({
      type: AUTH_DATA,
      payload: user
    });
  };
  const logOutMethod = () => {
    dispath({
      type: AUTH_LOGOUT,
      payload: initialState
    });
  };

  return (
    <UserContext.Provider
      value={{
        A_CSRF_Auth: state.A_CSRF_Auth,
        user: state.user,
        logOutMethod,
        setACSRFMethod,
        setUserMethod
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
