import axios from './axios';

const post = (url, body = {}, ACSRF = '') => {
  return axios({
    method: 'POST',
    data: body,
    url: url,
    headers: {
      'x-access-token': ACSRF
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
