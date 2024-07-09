import React, { useEffect, Fragment } from 'react';
import ReactGA from 'react-ga';

const GA_TRACKING_CODE = process.env.GA_TRACKING_CODE || 'UA-156956408-1';

export interface GoogleAnalyticsProps {
  page: string,
}

export default ({ page }: GoogleAnalyticsProps) => {
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_CODE);
    ReactGA.pageview(page);
    ReactGA.event({
      category: 'Page Views',
      action: 'View Page',
    });
  }, [page]);

  return <Fragment />;
};
