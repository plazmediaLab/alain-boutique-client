import axios from 'axios';

/**
 *
 * Configurations
 *
 */
const instance = axios.create({
  baseURL: 'https://alain-boutique-api.herokuapp.com/'
});

/**
 *
 * Your 'Authorization' header, etc ...
 *
 */
// const A_CSRF_token = localStorage.getItem('setA_CSRF_token');
// instance.defaults.headers.common['Authorization'] = A_CSRF_token;

/**
 * Export
 */
export default instance;
