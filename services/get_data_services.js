import api from './axios';

const get = (url, ACSRF = '') => {
  return api({
    method: 'GET',
    url: url,
    headers: {
      'x-access-token': ACSRF,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export const getProducts = async (TOKEN) => {
  try {
    const res = await get('/api/product', TOKEN);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    // console.log(err.response.data);
    return err.response.data;
  }
};