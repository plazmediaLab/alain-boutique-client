import { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import { AUTH_DATA, SET_ACSRF_AUTH } from '../types';

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

  return (
    <UserContext.Provider
      value={{
        A_CSRF_Auth: state.A_CSRF_Auth,
        user: state.user,
        setACSRFMethod,
        setUserMethod
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
