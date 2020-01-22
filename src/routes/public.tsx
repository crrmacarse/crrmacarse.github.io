import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import NotFound from './not-found'

// @TODO: Idk yet how exactly this works
const Home = lazy(() => import("components/public/home"));
const Portfolio = lazy(() => import("components/public/portfolio"))
const About = lazy(() => import("components/public/about"))
const Contact = lazy(() => import("components/public/contact"));

export default () => (
    <div className="ui container">
        <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.PORTFOLIO} component={Portfolio} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.CONTACT} component={Contact} />
            <Route component={NotFound} />
        </Switch>
    </div>
)