
const { colors } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,html}', // <== Update this
    './v2/**/*.{ts,tsx,html}', // <== Update this
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      ...colors,
      primary: {
        DEFAULT: '',
      }
    },
    extend: {
      height: {
        128: '32rem',
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: [
    'preflight',
    'display',
    'cursor',
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'alignItems',
    'alignContent',
    'alignSelf',
    'fontSize',
    'justifyContent',
    'margin',
    'zIndex',
    'textTransform',
    'fontWeight',
    'height',
    'width',
    'padding',
    'borderWidth',
    'position',
    'inset',
    'opacity',
    'maxWidth',
    'boxShadow',
    'borderRadius',
    'overflow',
    'objectFit',
    'textAlign',
    'borderStyle',
    'textColor',
    'grid',
    'gridTemplateColumns',
    'gap',
    'minHeight',
    'space'
  ],
};
