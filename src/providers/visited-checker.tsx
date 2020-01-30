import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { setVisited } from 'actions/global';

const VisitedChecker = ({ setValueOfVisited }: { setValueOfVisited: (b: boolean) => void }) => {
  useEffect(() => {
    const visited = window.localStorage.getItem('visited');

    if (visited) {
      setValueOfVisited(true);
    } else {
      window.localStorage.setItem('visited', 'true');
      setValueOfVisited(false);
    }
  }, []);

  return <Fragment />;
};

const mapDispatchToProps = {
  setValueOfVisited: setVisited,
};

export default connect(null, mapDispatchToProps)(VisitedChecker);
