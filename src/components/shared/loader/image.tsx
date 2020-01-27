import React from 'react';

// @TODO: Add support for loader
const ImageLoader = ({ className }:{ className?: string }) => (
  <div className={`ph-item h-full mb-0 p-0 absolute ${className}`}>
    <div className="ph-picture h-full " />
  </div>
);

export default ImageLoader;
