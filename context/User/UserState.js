import { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    user: ''
  };

  const [state, dispath] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        user: state.user
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
