import 'scss/index.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import Providers from 'providers';
import 'i18n';
import 'providers/fontawesome';

ReactDOM.render(
  <Providers />,
  document.getElementById('root'),
);
