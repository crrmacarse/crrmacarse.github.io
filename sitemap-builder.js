require('@babel/register');
const Sitemap = require('./node_modules/react-router-sitemap').default;
const Router = require('./routes').default;

const PUBLIC_URL = process.env.PUBLIC_URL || 'https://crrmacarse.github.io';
// const BUILD_PATH = './dist/sitemap.xml';
const MANUAL_BUILD_PATH = './essentials/sitemap.xml'; // https://babeljs.io/docs/en/next/babel-node.html#not-meant-for-production-use

function generateSitemap() {
  try {
    return (new Sitemap(Router)
      .build(PUBLIC_URL)
      .save(MANUAL_BUILD_PATH)
    );
  } catch (error) {
    return console.warn('Something went wrong in building the sitemap', error);
  }
}

generateSitemap();
