import { useEffect, useReducer, useState } from 'react';
import { AUTH_LOGOUT, HANDLE_AUTH_USER, AUTH_LOGIN } from '../types';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import Cookies from 'js-cookie';
import api from 'services/axios';
import authToken from 'helpers/authToken';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    user: undefined,
    logged: false
  };
  const [loading, setLoading] = useState(true);

  const [state, dispath] = useReducer(AuthReducer, initialState);

  async function handleCookieExist() {
    const token = Cookies.get('A-CSRF-COOKIE');
    if (token) {
      const isValidToken = new authToken(token).isValid;
      if (isValidToken) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.x_access_token = token;
        const {
          data: { data }
        } = await api.post('/api/user/auth');
        if (data)
          dispath({
            type: HANDLE_AUTH_USER,
            payload: data
          });
      }
    }
    setLoading(false);
  }

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

  useEffect(() => {
    handleCookieExist();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!state.user,
        user: state.user,
        logged: state.logged,
        loading,
        loginMethod,
        logOutMethod
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserState;
