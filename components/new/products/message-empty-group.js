export default function MessageEmptyGroup() {
  return (
    <>
      <div className="relative p-3 text-alain-blue-300 rounded-card text-center bg-alain-blue-100 mb-3 text-xs tracking-wider font-light">
        <svg viewBox="0 0 48.29 28.98" className="w-6 h-6 absolute">
          <title>{'arrow-modal-menu'}</title>
          <g data-name="Capa 2">
            <path
              d="M0 29L19 2.8a6.22 6.22 0 0110.39 0L48.29 29z"
              fill="#EFEFFF"
              data-name="Capa 1"
            />
          </g>
        </svg>
        <p>Crea un grupo para poder agregar productos</p>
      </div>
      <style jsx>{`
        svg {
          right: 0.5rem;
          top: -1.2rem;
        }
      `}</style>
    </>
  );
}
