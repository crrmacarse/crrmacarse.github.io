import React, { lazy, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import ReactHelmet from 'hooks/helmet';
import GoogleAnalytics from 'hooks/ga';
import ScrollToTop from './scroll-to-top';
import NotFound from './not-found';

const Home = lazy(() => import('components/public/home'));
const Portfolio = lazy(() => import('components/public/portfolio'));
const About = lazy(() => import('components/public/about'));
const Contact = lazy(() => import('components/public/contact'));
const Resume = lazy(() => import('components/public/resume'));
const Personal = lazy(() => import('components/public/personal'));
const More = lazy(() => import('components/public/more'));

const PublicRoutes = ({ location: { pathname } }:{ location: { pathname: string }}) => (
  <Fragment>
    <ReactHelmet title={pathname} />
    <GoogleAnalytics page={pathname} />
    <ScrollToTop path={pathname} />
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.PORTFOLIO} component={Portfolio} />
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Route path={ROUTES.RESUME} component={Resume} />
      <Route path={ROUTES.PERSONAL} component={Personal} />
      <Route path={ROUTES.MORE} component={More} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default withRouter(PublicRoutes);
