import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import NotFound from 'routes/not-found';
import AdminProjectsRoutes from './projects';
import AdminBlogRoutes from './blog';
import AdminPersonalRoutes from './personal';

const AdminDashboard = lazy(() => import('components/admin/dashboard'));
const AdminLogin = lazy(() => import('forms/common/login'));

const AdminRoutes = () => (
  <Switch>
    <Route path={ROUTES.ADMIN_PROJECTS} component={AdminProjectsRoutes} />
    <Route path={ROUTES.ADMIN_BLOG} component={AdminBlogRoutes} />
    <Route path={ROUTES.ADMIN_PERSONAL} component={AdminPersonalRoutes} />
    <Route exact path={ROUTES.ADMIN} component={AdminDashboard} />
    <Route path={ROUTES.ADMIN_LOGIN} component={AdminLogin} />
    <Route component={NotFound} />
  </Switch>
);

export default AdminRoutes;
