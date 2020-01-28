
const { colors: { orange } } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      orange,
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
  ],
};
