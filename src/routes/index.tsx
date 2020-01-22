import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom' // @TODO Research more about BrowserRouter vs HashRouter
import * as ROUTES from 'constants/routes'
import BaseLoader from 'components/shared/loader/base'
import Navbar from 'components/shared/navbar'
import Footer from 'components/shared/footer'
import ErrorBoundary from './error-boundary'
import NotFound from './not-found'

// @TODO: Idk yet how exactly this works
const Home = lazy(() => import("components/public/home"));
const Portfolio = lazy(() => import("components/public/portfolio"))
const About = lazy(() => import("components/public/about"))
const Contact = lazy(() => import("components/public/contact"));

export default () => (
    <Router>
        <ErrorBoundary>
            <Suspense fallback={<BaseLoader />}>
                <Navbar />
                <Switch>
                    <Route exact path={ROUTES.HOME} component={Home} />
                    <Route path={ROUTES.PORTFOLIO} component={Portfolio} />
                    <Route path={ROUTES.ABOUT} component={About} />
                    <Route path={ROUTES.CONTACT} component={Contact} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Suspense>
        </ErrorBoundary>
    </Router>
)