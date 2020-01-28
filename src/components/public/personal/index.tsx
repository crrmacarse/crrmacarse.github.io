import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SUBROUTES from './data';
import Nav from './nav';

const Personal = () => {
  const { state } = useLocation();
  const [current, setCurrent] = useState(state || 'Main');
  const Component = SUBROUTES.find(({ value }) => value === current).component;

  useEffect(() => {
    if (state) {
      setCurrent(state);
    }
  }, [state]);

  return (
    <div className="personal-section flex lg:flex-row flex-col justify-between">
      <Nav routes={SUBROUTES} current={current} />
      <div className="component lg:w-3/4">
        <div className="mr-auto">
          <Component />
        </div>
      </div>
    </div>
  );
};

export default Personal;
