import jwtDecode from 'jwt-decode';

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

export default authToken;
