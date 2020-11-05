import AuthContext from 'context/Auth/AuthContext';
import { useContext } from 'react';
import AvatarItem from './avatar-item';
import ButtonLogOut from './button-logout';
import ParnerthKeyItem from './parnerth-key-item';
import { menuStyles } from './style';

export default function Menu(props) {
  const authContext = useContext(AuthContext);
  const {
    user: { name = '', email = '', parnerth_key = '' }
  } = authContext;

  // const { user } = authContext;
  // console.log(user);

  return (
    <>
      <div className="bg-white rounded-card shadow-menu absolute overflow-hidden z-10">
        <ul className="flex flex-col text-left">
          <li className="p-2 flex space-x-3 items-center">
            <AvatarItem name={name} email={email} />
          </li>
          {parnerth_key ? (
            <li className="py-2 pl-3 pr-2 border-t border-gray-200 text-xs text-gray-500">
              <ParnerthKeyItem parnerth_key={parnerth_key} />
            </li>
          ) : null}
          <li className="pb-3 pt-8 pl-3 pr-2 border-t border-gray-200">
            <small className="text-xs text-center text-gray-400 block">
              Sales manager v2.0.0 · &copy; 2020 Plazmedia
            </small>
          </li>
          <li>
            <ButtonLogOut />
          </li>
        </ul>
      </div>
      <style jsx>{menuStyles}</style>
    </>
  );
}
