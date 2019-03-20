const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

if (process.env.NODE_ENV == 'production') {
  module.exports = withTypescript(withImages(withCSS({ target: 'server' })));
} else {
  module.exports = withTypescript(
    withImages(withCSS({ target: 'serverless' })),
  );
}
