import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import useDarkMode from 'hooks/useDarkMode';
import BaseLoader from 'components/shared/loader/base';
import Navbar from 'components/shared/navbar';
import Footer from 'components/shared/footer';
import ErrorBoundary from './error-boundary';

// @TODO: Suspense fallback should have delay for
// better UX
export default () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className={`theme theme--${theme}`}>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<BaseLoader />}>
            <Navbar theme={theme} toggleTheme={() => toggleTheme()} />
            <Routes />
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
};
