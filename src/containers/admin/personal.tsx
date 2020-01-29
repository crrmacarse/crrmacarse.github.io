import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import NotFound from 'routes/not-found';

const AdminPersonal = lazy(() => import('components/admin/personal'));
const AdminPersonalAdd = lazy(() => import('forms/admin/personal/add'));
const AdminPersonalEdit = lazy(() => import('forms/admin/personal/edit'));

const AdminPersonalRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.ADMIN_PERSONAL} component={AdminPersonal} />
    <Route path={ROUTES.ADMIN_PERSONAL_ADD} component={AdminPersonalAdd} />
    <Route path={ROUTES.ADMIN_PERSONAL_EDIT} component={AdminPersonalEdit} />
    <Route component={NotFound} />
  </Switch>
);

export default AdminPersonalRoutes;
