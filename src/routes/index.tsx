import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import ErrorBoundary from './error-boundary'

const Home = lazy(() => import("components/public/home"));
const Portfolio = lazy(() => import("components/public/portfolio"))
const About = lazy(() => import("components/public/about"))
const Contact = lazy(() => import("components/public/contact"));

export default () => (
    <ErrorBoundary>
        <Router>
            <Switch>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route exact path={ROUTES.PORTFOLIO} component={Portfolio} />
                <Route exact path={ROUTES.ABOUT} component={About} />
                <Route exact path={ROUTES.CONTACT} component={Contact} />
            </Switch>
        </Router>
    </ErrorBoundary>
)