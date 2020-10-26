import Axios from 'axios';

let urls = {
  DEV: 'http://localhost:1922',
  PROD: 'https://alain-boutique-api.herokuapp.com'
};

/**
 *
 * Base configurations
 *
 */
const api = Axios.create({
  baseURL: urls.PROD,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

/**
 * Export
 */
export default api;
