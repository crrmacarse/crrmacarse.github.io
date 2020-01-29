import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import NotFound from 'routes/not-found';

const AdminBlog = lazy(() => import('components/admin/blog'));
const AdminBlogAdd = lazy(() => import('forms/admin/blog/add'));
const AdminBlogEdit = lazy(() => import('forms/admin/blog/edit'));

const AdminBlogRoutes = () => (
  <Switch>
    <Route exact path={ROUTES.ADMIN_BLOG} component={AdminBlog} />
    <Route path={ROUTES.ADMIN_BLOG_ADD} component={AdminBlogAdd} />
    <Route path={ROUTES.ADMIN_BLOG_EDIT} component={AdminBlogEdit} />
    <Route component={NotFound} />
  </Switch>
);

export default AdminBlogRoutes;
