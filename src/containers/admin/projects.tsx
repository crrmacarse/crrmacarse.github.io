import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import NotFound from 'routes/not-found';

const AdminProjects = lazy(() => import('components/admin/projects'));
const AdminProjectsAdd = lazy(() => import('forms/admin/projects/add'));
const AdminProjectsEdit = lazy(() => import('forms/admin/projects/edit'));

const AdminProjectRoute = () => (
  <Switch>
    <Route exact path={ROUTES.ADMIN_PROJECTS} component={AdminProjects} />
    <Route path={ROUTES.ADMIN_PROJECTS_ADD} component={AdminProjectsAdd} />
    <Route path={ROUTES.ADMIN_PROJECTS_EDIT} component={AdminProjectsEdit} />
    <Route component={NotFound} />
  </Switch>
);

export default AdminProjectRoute;
