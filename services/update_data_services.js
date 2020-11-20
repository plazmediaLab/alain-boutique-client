import { getCookie } from 'helpers/cookie';
import api from './axios';

const put = (url, body) => {
  const TOKEN = getCookie('A-CSRF-COOKIE');

  return api({
    method: 'PUT',
    data: body,
    url: url,
    headers: {
      'x-access-token': TOKEN,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export const updateProduct = async (ID, body) => {
  try {
    const res = await put(`/api/product/${ID}`, body);
    return res.data;
  } catch (err) {
    if (err.response.data.error === 401) {
      location.reload();
    }
    return err.response.data;
  }
};
