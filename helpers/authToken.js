import jwtDecode from 'jwt-decode';
import Cookie from 'js-cookie';
import Cookies from 'cookies';

class authToken {
  constructor(CSFR_TOKEN) {
    // Vamos a utilizar por defecto un decodedToken caducado
    this.decodedToken = { email: '', exp: 0 };

    // Decodificar el jwt usando jwt-decode
    try {
      if (CSFR_TOKEN) this.decodedToken = jwtDecode(CSFR_TOKEN);
    } catch (err) {
      console.log(err);
    }
  }

  get expiresAt() {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired() {
    return new Date() > this.expiresAt;
  }

  get isValid() {
    return !this.isExpired;
  }
}

const processToken = (context) => {
  const cookies = new Cookies(context);

  // get token
  const A_CSRF_TOKEN = cookies.get('A-CSRF-COOKIE');

  const isValidToken = new authToken(A_CSRF_TOKEN).isValid;

  if (!isValidToken) {
    Cookie.remove('A-CSRF-COOKIE');
    return null;
  } else {
    return A_CSRF_TOKEN;
  }
};

export default processToken;
