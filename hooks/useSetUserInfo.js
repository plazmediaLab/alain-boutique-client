import UserContext from 'context/User/UserContext';
import { useContext } from 'react';

export default function useSetUserInfo() {
  const userContext = useContext(UserContext);
  const { user, setUserMethod } = userContext;

  const setData = (data) => {
    !user && setUserMethod(data);
  };

  return [setData];
}
