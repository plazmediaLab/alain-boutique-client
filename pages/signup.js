import Layount from 'components/layout';
import { useRouter } from 'next/router';
import SignUpForm from 'components/signup-form';

export default function SignUp() {
  const route = useRouter();

  return (
    <>
      <Layount>
        <div className="w-full grid place-items-center">
          <section className="w-full">
            <h1 className="text-center font-medium text-2xl mb-4">Crear una cuenta</h1>

            <SignUpForm />

            <button
              className="text-center text-alain-blue-500 block cursor-pointer hover:underline mx-auto"
              onClick={() => route.push('/login')}>
              <svg
                className="w-6 h-6 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                />
              </svg>
              Regresar
            </button>
          </section>
        </div>
        <footer className="w-full grid place-items-center">
          <p className="text-sm block text-gray-500">Alain Boutique · &copy; 2020 Plazmedia</p>
        </footer>
      </Layount>

      <style jsx>{`
        div {
          height: 90%;
        }
        footer {
          height: 10%;
        }
      `}</style>
    </>
  );
}
