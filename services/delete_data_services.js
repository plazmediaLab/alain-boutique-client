import { getCookie } from 'helpers/cookie';
import api from './axios';

const destroy = (url) => {
  const TOKEN = getCookie('A-CSRF-COOKIE');

  return api({
    method: 'DELETE',
    url: url,
    headers: {
      'x-access-token': TOKEN,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export const destroyGoup = async (ID) => {
  try {
    const res = await destroy(`/api/group/${ID}`);
    return res.data;
  } catch (err) {
    if (err.response.data.error === 401) {
      location.reload();
    }
    return err.response.data;
  }
};

export const destroyProduct = async (ID) => {
  try {
    const res = await destroy(`/api/product/${ID}`);
    return res.data;
  } catch (err) {
    if (err.response.data.error === 401) {
      location.reload();
    }
    return err.response.data;
  }
};
