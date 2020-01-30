import React, { Suspense } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'providers/store';
import Routes from 'routes';
import useDarkMode from 'hooks/useDarkMode';
import BaseLoader from 'components/shared/loader/base';
import Navbar from 'components/shared/navbar';
import Footer from 'components/shared/footer';
import VisitedChecker from './visited-checker';
import ErrorBoundary from './error-boundary';

// @TODO: Suspense fallback should have delay for
// better UX
export default () => {
  const { theme, isFirstTime, toggleTheme } = useDarkMode();

  return (
    <ReduxProvider store={store}>
      <VisitedChecker />
      <div className={`theme theme--${theme}`}>
        <Router>
          <ErrorBoundary>
            <Suspense fallback={<BaseLoader />}>
              <Navbar theme={theme} isFirstTime={isFirstTime} toggleTheme={() => toggleTheme()} />
              <Routes />
              <Footer />
            </Suspense>
          </ErrorBoundary>
        </Router>
      </div>
    </ReduxProvider>
  );
};
