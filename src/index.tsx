import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'raf/polyfill';
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

// serviceWorker registration is from
// CRA with a little modifications
// https://create-react-app.dev/docs/making-a-progressive-web-app/
// https://developers.google.com/web/fundamentals/primers/service-workers
// https://developers.google.com/web/tools/workbox/guides/get-started
serviceWorker.register();
