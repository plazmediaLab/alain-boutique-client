import { useReducer } from 'react';
import { AUTH_LOGOUT, AUTH_LOGIN } from '../types';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    user: undefined,
    logged: false
  };

  // Reducer
  const [state, dispath] = useReducer(AuthReducer, initialState);

  // Auth Methods
  const loginMethod = (data) => {
    dispath({
      type: AUTH_LOGIN,
      payload: data
    });
  };
  const logOutMethod = () => {
    dispath({
      type: AUTH_LOGOUT,
      payload: initialState
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        logged: state.logged,
        loginMethod,
        logOutMethod
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserState;
