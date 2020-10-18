import axios from './axios';

const post = (url, body = {}, ACSRF = '') => {
  return axios({
    method: 'POST',
    data: body,
    url: url,
    headers: {
      'x-access-token': ACSRF,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export const postLogin = async (body) => {
  try {
    const res = await post('/api/user/login', body);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    // console.log(error.response.data);
    return error.response.data;
  }
};

export const postUserInfo = async (A_CSRF_TOKEN) => {
  if (!A_CSRF_TOKEN) {
    return null;
  } else {
    try {
      const res = await post('/api/user/auth', {}, A_CSRF_TOKEN);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error.response.data);
      return error.response.data;
    }
  }
};
