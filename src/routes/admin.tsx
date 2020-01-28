import 'scss/admin.scss';
import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import NotFound from './not-found';

const AdminDashboard = lazy(() => import('components/admin/dashboard'));
const AdminLogin = lazy(() => import('components/admin/login'));

const AdminRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.ADMIN} component={AdminDashboard} />
    <Route path={ROUTES.ADMIN_LOGIN} component={AdminLogin} />
    <Route component={NotFound} />
  </Switch>
);

export default AdminRoutes;
