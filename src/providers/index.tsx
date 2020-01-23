import React, { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom' // @TODO Research more about BrowserRouter vs HashRouter
import PublicRoutes from 'routes/public'
import useDarkMode from 'hooks/useDarkMode';
import BaseLoader from 'components/shared/loader/base'
import Navbar from 'components/shared/navbar'
import Footer from 'components/shared/footer'
import ErrorBoundary from './error-boundary'

// @TODO: Suspense fallback should have delay for
// better UX
export default () => {
    const [theme, toggleTheme] = useDarkMode()

    return <div className={`theme theme--${theme}`}>
        <Router>
            <ErrorBoundary>
                <Suspense fallback={<BaseLoader />}>
                    <Navbar theme={theme} toggleTheme={() => toggleTheme()} />
                    <PublicRoutes />
                    <Footer />
                </Suspense>
            </ErrorBoundary>
        </Router>
    </div>
}