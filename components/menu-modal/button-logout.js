import uselogut from 'hooks/useLogut';

export default function ButtonLogOut() {
  const [processLogout] = uselogut();

  return (
    <button
      className="p-3 bg-red-600 text-white w-full font-light tracking-wide text-sm"
      onClick={processLogout}>
      Cerrar sesión
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
  );
}
