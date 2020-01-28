import React, { useState } from 'react';
import SUBROUTES from './data';
import Nav from './nav';

const Personal = () => {
  const [current, setCurrent] = useState('Main');
  const Component = SUBROUTES.find(({ value }) => value === current).component;

  return (
    <div className="personal-section flex lg:flex-row flex-col justify-between">
      <Nav routes={SUBROUTES} current={current} setCurrent={(value) => setCurrent(value)} />
      <div className="component lg:w-3/4">
        <div className="mr-auto">
          <Component />
        </div>
      </div>
    </div>
  );
};

export default Personal;
