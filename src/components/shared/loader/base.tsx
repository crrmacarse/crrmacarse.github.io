import React from 'react';

const BaseLoader = () => (
  <div className="base-loader">
    <div className="overlay fixed w-full h-screen top-0 z-19" />
    <div className="fixed flex flex-col justify-center items-center w-full h-screen top-0 z-20">
      <i className="fas fa-atom fa-spin " />
    </div>
  </div>
);

export default BaseLoader;
