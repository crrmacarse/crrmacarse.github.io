import React from 'react';

const NotFound = () => (
  <div className="not-found-section flex flex-col w-full h-screen justify-center items-center text-center">
    <p className="text-6xl">Page Not Found :(</p>
    <a href="/" className="my-3 font-semibold">Return to the homepage.</a>
  </div>
);

export default NotFound;
