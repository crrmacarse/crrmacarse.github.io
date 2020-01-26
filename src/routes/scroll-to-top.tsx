import React, { useEffect, Fragment } from 'react';

export default ({ path }: { path: string }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [path]);

  return <Fragment />;
};
