import { useRouter } from 'next/router';

export default function BackHeaderControl() {
  const router = useRouter();

  return (
    <>
      <header className="flex items-center justify-center space-x-3 sm:space-x-6 text-gray-500 mb-2">
        <button
          className="border border-red-200 py-2 pl-1 pr-3 text-red-300 hover:border-red-500 hover:text-white hover:bg-red-500 rounded-full text-label uppercase"
          onClick={() => router.back()}>
          <svg
            className="w-4 h-4 inline-block mr-small"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Regresar
        </button>
        <h2 className="text-title-page flex-1 truncate">Productos vendidos</h2>
      </header>
      <hr className="my-2" />
    </>
  );
}
