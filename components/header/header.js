import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  let title;

  switch (router.pathname) {
    case '/home':
      title = 'Inicio';
      break;
    case '/products':
      title = 'Productos';
      break;
    case '/summary':
      title = 'Resumen';
      break;
    case '/orders':
      title = 'Pedidos';
      break;

    default:
      break;
  }

  return (
    <>
      <header className={`w-full grid place-items-center sticky top-0 left-0 h-custom`}>
        <section className="w-full px-3 flex space-x-2">
          <div className="w-10 h-10 grid place-items-center rounded-full">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="flex-1 grid place-items-center text-title-page font-medium">{title}</h2>
          <div className="w-10 h-10 grid place-items-center rounded-full bg-alain-blue-100 text-alain-blue-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </section>
      </header>

      <style jsx>{`
        header {
          -webkit-box-shadow: 0px 2px 4px 0px rgba(30, 27, 77, 0.13);
          box-shadow: 0px 2px 4px 0px rgba(30, 27, 77, 0.13);
          background: rgba(
            255,
            255,
            255,
            0.2
          ); /* Make sure this color has an opacity of less than 1 */
          backdrop-filter: blur(5px); /* This be the blur */
        }
      `}</style>
    </>
  );
}
