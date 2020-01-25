import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BaseLoader = () => (
  <div className="base-loader">
    <div className="overlay fixed w-full h-screen top-0 z-19" />
    <div className="fixed flex flex-col justify-center items-center w-full h-screen top-0 z-20">
      <FontAwesomeIcon icon="atom" spin />
    </div>
  </div>
);

export default BaseLoader;
