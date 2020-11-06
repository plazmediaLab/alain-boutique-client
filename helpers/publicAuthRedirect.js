const { postUserInfo } = require('services/auth_service');
const { default: authToken } = require('./authToken');
const { getCookie } = require('./cookie');

async function publicAuthRedirect(ctx, redirect) {
  if (ctx.req) {
    const TOKEN = getCookie('A-CSRF-COOKIE', ctx.req);
    const valid = new authToken(TOKEN).isValid;
    if (valid) {
      const { ok } = await postUserInfo(TOKEN);
      if (ok) {
        ctx.res.writeHead(302, { Location: redirect });
        ctx.res.end();
      }
    }
  }
}

export default publicAuthRedirect;
