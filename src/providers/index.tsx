import React, { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom' // @TODO Research more about BrowserRouter vs HashRouter
import PublicRoutes from 'routes/public'
import useDarkMode from 'hooks/useDarkMode';
import BaseLoader from 'components/shared/loader/base'
import Navbar from 'components/shared/navbar'
import Footer from 'components/shared/footer'
import ErrorBoundary from './error-boundary'

export default () => {
    const [theme, toggleTheme] = useDarkMode()

    return <div className={`theme theme--${theme}`}>
        <div className="base">
            <Router>
                <ErrorBoundary>
                    <Suspense fallback={<BaseLoader />}>
                        <Navbar toggleTheme={() => toggleTheme()} />
                        <PublicRoutes />
                        <Footer />
                    </Suspense>
                </ErrorBoundary>
            </Router>
        </div>
    </div>
}