import LoginForm from 'components/login-form';
import Layout from 'components/layout';
import Link from 'next/link';
import AuthMsn from 'components/resources/auth-msn';
import LogoLogin from 'components/logo-login';
import publicAuthRedirect from 'helpers/publicAuthRedirect';

function Login({ authAccess }) {
  return (
    <>
      <Layout>
        <div className="w-full grid place-items-center relative">
          {authAccess === 'unauthorized' ? (
            <aside className="w-full absolute top-0 py-4">
              <AuthMsn />
            </aside>
          ) : null}

          <section className="w-full">
            <LogoLogin />

            <LoginForm />

            <p className="text-center text-gray-500 mt-3">- o -</p>

            <Link href="/signup">
              <a className="text-center text-alain-blue-500 block mt-3 underline">
                Crear una cuenta
              </a>
            </Link>
          </section>
        </div>
        <footer className="w-full grid place-items-center">
          <p className="text-sm block text-gray-500">Alain Boutique · &copy; 2020 Plazmedia</p>
        </footer>
      </Layout>

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

Login.getInitialProps = async (ctx) => {
  await publicAuthRedirect(ctx, '/home');
  return {
    authAccess: ctx.query.auth && ctx.query.auth
  };
};

export default Login;
