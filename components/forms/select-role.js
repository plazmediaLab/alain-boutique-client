export default function SelectRole({ handleRole, role }) {
  return (
    <div className="mb-4 mt-4 sm:mt-8">
      <p className="block my-2 text-center font-light tracking-wider mb-6">Registrarse como:</p>

      <div className="flex items-center justify-around text-gray-400">
        <label
          className={`cursor-pointer flex items-center ${
            role === 'USER_ROLE' && 'text-alain-blue-500'
          }`}>
          <input
            type="radio"
            name="empleoactual"
            value="USER_ROLE"
            className="hidden"
            onClick={(e) => handleRole(e)}
          />
          <svg
            className="w-6 h-6 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            />
          </svg>
          Vendedor
        </label>
        <label
          className={`cursor-pointer flex items-center ${
            role === 'PARNERTH_ROLE' && 'text-alain-blue-500'
          }`}>
          <input
            type="radio"
            name="empleoactual"
            value="PARNERTH_ROLE"
            className="hidden"
            onClick={(e) => handleRole(e)}
          />
          <svg
            className="w-6 h-6 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
            />
          </svg>
          Socio
        </label>
      </div>
      {role === 'USER_ROLE' && (
        <small className="text-center block text-gray-500 leading-tight mt-2">
          Agrega tus productos, agrega socios, administra tus ventas y revisa tus ganancias.
        </small>
      )}
      {role === 'PARNERTH_ROLE' && (
        <small className="text-center block text-gray-500 leading-tight mt-2">
          Obten el resumen de ventas de tus productos administrados por tu vendedor.
        </small>
      )}
    </div>
  );
}
