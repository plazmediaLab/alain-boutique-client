import axios from 'utilities/axios';

export default async function fetchUserData(TOKEN) {
  try {
    const { data } = await axios({
      method: 'POST',
      url: '/api/user/auth',
      headers: {
        'x-access-token': TOKEN
      }
    });
    console.log(data.data);
    return data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
