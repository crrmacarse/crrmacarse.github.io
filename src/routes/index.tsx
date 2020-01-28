import React, { Fragment } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import ReactHelmet from 'hooks/helmet';
import GoogleAnalytics from 'hooks/ga';
import * as ROUTES from 'constants/routes';
import ScrollToTop from './scroll-to-top';
import PublicRoutes from './public';
import AdminRoutes from './admin';
import NotFound from './not-found';

const Routes = ({ location: { pathname } }:{ location: { pathname: string }}) => (
  <Fragment>
    <ReactHelmet title={pathname} />
    <GoogleAnalytics page={pathname} />
    <ScrollToTop path={pathname} />
    <Switch>
      <Route path="/admin" component={AdminRoutes} />
      <Route path={ROUTES.HOME} component={PublicRoutes} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default withRouter(Routes);
