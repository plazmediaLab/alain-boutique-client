export default function AuthMsn() {
  return (
    <>
      <div className="mx-auto rounded-card bg-yellow-500 p-2 text-center text-yellow-800 font-light text-sm tracking-wide">
        <p>Necesita iniciar sesión para acceder a esa página.</p>
      </div>

      <style jsx>{`
        div {
          width: 90%;
        }
      `}</style>
    </>
  );
}
