import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'providers/personal';
import 'scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'providers/store';
import 'i18n';
import 'providers/firebase';
import 'providers/fontawesome';
import Providers from 'providers';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Providers />
  </ReduxProvider>,
  document.getElementById('root'),
);
