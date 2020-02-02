import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'providers/personal';
import 'scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'providers/firebase';
import 'providers/fontawesome';
import 'i18n';
import Providers from 'providers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Providers />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
