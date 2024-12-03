const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './v2/**/*.ts',
    './v2/**/*.tsx',
    './v2/**/*.js',
    // './src/**/*.ts',
    // './src/**/*.tsx',
    // './src/**/*.js',
  ],

  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    cssnano(),
    autoprefixer,
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
  ],
};
