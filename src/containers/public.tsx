import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as ROUTES from 'constants/routes';
import NotFound from 'routes/not-found';

const Home = lazy(() => import('components/public/home'));
const Portfolio = lazy(() => import('components/public/portfolio'));
const About = lazy(() => import('components/public/about'));
const Contact = lazy(() => import('components/public/contact'));
const Resume = lazy(() => import('components/public/resume'));
const Personal = lazy(() => import('components/public/personal'));
const More = lazy(() => import('components/public/more'));

const PublicRoutes = () => (
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
);

export default PublicRoutes;
