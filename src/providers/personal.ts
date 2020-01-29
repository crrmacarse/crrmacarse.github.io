/* eslint-disable */

const shadowCss = [
  '3px 3px 0 #1cb799',
  '6px 6px 0 #fd6a33',
  '12px 12px 0 rgb(5,148,68)',
  '15px 15px 0 #fd6a33',
  '18px 18px 0 rgb(4,77,145)',
  '21px 21px 0 #ebebeb',
].join(', ')

const fancyCss = [
  'font-weight: bold',
  'font-size: 50px',
  'color: #eba142',
  `text-shadow: ${shadowCss}`,
].join('; ');

console.log(
  '%c Welcome to my personal website!, you beautiful motherfucker.' + `%c \n \n \n Hire me: crrmacarse@gmail.com \n`,
  fancyCss,
  'font-size: 15px;',
);
