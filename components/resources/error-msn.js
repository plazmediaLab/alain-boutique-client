// eslint-disable-next-line
export default function ErrorMsn({ message, mt = 'mt-6', mb = 'mb-2' }) {
  return (
    <>
      <div
        className={`grid place-items-center ${mt} ${mb} rounded border-l-4 border-red-300 p-3 text-red-500`}>
        <p className="leading-tight text-xs tracking-wide">
          <svg
            className="inline-block mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {message}
        </p>
      </div>
      <style jsx>{`
        svg {
          width: 1rem !important;
          height: 1rem !important;
        }
      `}</style>
    </>
  );
}
