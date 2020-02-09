import React, { Fragment, useEffect } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import ReactHelmet from 'hooks/helmet';
import GoogleAnalytics from 'hooks/ga';
import NProgress from 'nprogress';
import * as ROUTES from 'constants/routes';
import PublicRoutes from 'containers/public';
import AdminRoutes from 'containers/admin';
import ScrollToTop from './scroll-to-top';
import NotFound from './not-found';

const Routes = ({ location: { pathname } }: { location: { pathname: string } }) => {
  useEffect(() => {
    NProgress.start();

    // @TODO: To simulate only the loading. find a proper implementation
    setTimeout(() => {
      NProgress.done();
    }, 400);

    return () => NProgress.done();
  }, [pathname]);

  return (
    <Fragment>
      <ReactHelmet title={pathname} />
      <GoogleAnalytics page={pathname} />
      <ScrollToTop path={pathname} />
      <Switch>
        <Route path={ROUTES.ADMIN} component={AdminRoutes} />
        <Route path={ROUTES.HOME} component={PublicRoutes} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
};

export default withRouter(Routes);
