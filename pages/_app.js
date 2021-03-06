import AuthState from 'context/Auth/AuthState';
import ProductsState from 'context/Products/ProductsState';
import 'styles/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <ProductsState>
        <Component {...pageProps} />
      </ProductsState>
    </AuthState>
  );
}

export default MyApp;
