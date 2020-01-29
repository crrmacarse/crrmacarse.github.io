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

ReactDOM.render(
  <Providers />,
  document.getElementById('root'),
);
