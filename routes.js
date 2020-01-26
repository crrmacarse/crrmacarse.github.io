import React from 'react';
import { Route } from 'react-router';
import * as ROUTES from './src/constants/routes';

export default (
  <Route>
    {Object.values(ROUTES)
      .filter((r) => r !== '/')
      .map((r, key) => <Route key={key} path={r} />)}
  </Route>
);
