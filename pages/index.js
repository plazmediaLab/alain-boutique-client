import LoginForm from 'components/login-form';
import Layount from 'components/layout';
import Link from 'next/link';

export default function Login() {
  return (
    <>

      <Layount>

        <div className="w-full grid place-items-center">

          <section className="w-full">
            <img src="/isotype.svg" alt="Alain Boutique Isotype" className="mx-auto"/>
            <h1 className="text-center font-medium text-2xl">Alain Boutique</h1>
            <p className="text-center font-light text-sm text-gray-500 tracking-wider mb-5">
              Sales manager v1.0.0
            </p>

            <LoginForm/>

            <p className="text-center text-gray-500 mt-6">- o -</p>

            <Link href="/signup">
              <a className="text-center text-alain-blue-500 block mt-5 underline">
                Crear una cuenta
              </a>
            </Link>

          </section>

        </div>
        <footer className="w-full grid place-items-center">
          <p className="text-sm block text-gray-500">Alain Boutique · &copy; 2020 Plazmedia</p>
        </footer>
        

      </Layount>

      <style jsx>{`
        div{
          height: 90%;
        }
        footer{
          height: 10%;
        }
      `}</style>

    </>
  )
}
