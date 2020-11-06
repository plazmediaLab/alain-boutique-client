import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ModalBtn from './modal-btn';
import style from './style';
import title from './title';

export default function Header() {
  const [browser, setBrowser] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      setBrowser(navigator.userAgent.toLowerCase().indexOf('firefox') > -1);
    }
  }, []);

  return (
    <>
      <header
        className={`w-full grid place-items-center sticky top-0 left-0 h-custom ${
          browser ? `ffx` : ''
        }`}>
        <section className="w-full px-3 flex space-x-2">
          <ModalBtn />
          <h2 className="flex-1 grid place-items-center text-title-page font-medium">
            {title(router.pathname)}
          </h2>
          <button className="w-10 h-10 grid place-items-center rounded-full bg-alain-blue-100 text-alain-blue-400">
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
          </button>
        </section>
      </header>

      <style jsx>{style}</style>
    </>
  );
}
