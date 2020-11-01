// resource for handling cookies taken from here:
// https://github.com/carlos-peru/next-with-api/blob/master/lib/session.js

import cookie from 'js-cookie';

export const setCookie = (keyword, value) => {
  if (process.browser) {
    cookie.set(keyword, value, {
      expires: 1,
      path: '/'
    });
  }
};

export const removeCookie = (keyword) => {
  if (process.browser) {
    cookie.remove(keyword, {
      expires: 1
    });
  }
};

export const getCookie = (keyword, req) => {
  return process.browser ? getCookieFromBrowser(keyword) : getCookieFromServer(keyword, req);
};

const getCookieFromBrowser = (keyword) => {
  return cookie.get(keyword);
};

const getCookieFromServer = (keyword, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie.split(';').find((c) => c.trim().startsWith(`${keyword}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};
