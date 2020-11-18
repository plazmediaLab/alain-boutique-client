import LoadingIcon from 'components/resources/loading-icon';

export default function SubmitButtonNewGroup({ disabled, loading }) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="w-full p-3 rounded bg-teal-400 text-white uppercase font-light tracking-wide text-sm flex items-center justify-center">
      {loading ? (
        <LoadingIcon fill="#fff" w="21" h="21" />
      ) : (
        <>
          <svg
            className="w-5 h-5 mr-1 inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
          </svg>
          Agregar
        </>
      )}
    </button>
  );
}
