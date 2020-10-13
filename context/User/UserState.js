import { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import { AUTH_DATA } from '../types';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    user: null
  };

  const [state, dispath] = useReducer(UserReducer, initialState);

  const fetchDataSave = (user) => {
    console.log(user);
    dispath({
      type: AUTH_DATA,
      payload: user
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        fetchDataSave
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
