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
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

/**
 * Export
 */
export default instance;
