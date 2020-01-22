import React, { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom' // @TODO Research more about BrowserRouter vs HashRouter
import PublicRoutes from 'routes/public'
import BaseLoader from 'components/shared/loader/base'
import Navbar from 'components/shared/navbar'
import Footer from 'components/shared/footer'
import ErrorBoundary from './error-boundary'

export default () => (
    <Router>
        <ErrorBoundary>
            <Suspense fallback={<BaseLoader />}>
                <Navbar />
                <PublicRoutes />
                <Footer />
            </Suspense>
        </ErrorBoundary>
    </Router>
)