import { getCookie } from 'helpers/cookie';
import api from './axios';

const post = (url, body) => {
  const TOKEN = getCookie('A-CSRF-COOKIE');

  return api({
    method: 'POST',
    data: body,
    url: url,
    headers: {
      'x-access-token': TOKEN,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export const storeProduct = async (body) => {
  try {
    const res = await post('/api/product', body);
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
