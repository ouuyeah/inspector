export function getToken({ req } = {}) {
  if (!process.browser) {
    const { cookie } = req.headers || {};
    if (!cookie) return;

    const { token } = require('cookie').parse(cookie);
    return token;
  }

  const Cookies = require('js-cookie');
  const { token } = Cookies.get();
  return token;
}
