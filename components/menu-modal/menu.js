import AvatarName from 'components/avatar/avatar-name';
import AuthContext from 'context/Auth/AuthContext';
import uselogut from 'hooks/useLogut';
import { useContext } from 'react';

export default function Menu() {
  const [processLogout] = uselogut();

  const authContext = useContext(AuthContext);
  const {
    user: { name = '', email = '' }
  } = authContext;

  return (
    <div>
      <div className="bg-white rounded-card shadow-md absolute overflow-hidden">
        <ul className="flex flex-col">
          <li className="p-2 flex space-x-3 items-center">
            <div className="flex-1">
              <AvatarName />
            </div>
            <div>
              <p className="text-lg text-left leading-4">{name}</p>
              <p className="text-xs font-light tracking-wide text-left leading-4 text-gray-500">
                {email}
              </p>
            </div>
            <button className="p-2 rounded-full text-gray-400">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
          <li>
            <button
              className="p-2 bg-red-600 text-white w-full font-light tracking-wide text-sm"
              onClick={processLogout}>
              Log Out
              <svg
                className="w-4 h-4 ml-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <style jsx>{`
        div {
          top: 56px;
          max-height: 80%;
          width: calc(100% - 1rem);
          left: 0.5rem;
        }
      `}</style>
    </div>
  );
}
