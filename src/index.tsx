import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'i18n';
import 'providers/firebase';
import 'providers/fontawesome';
import Providers from 'providers';

ReactDOM.render(
  <Providers />,
  document.getElementById('root'),
);
