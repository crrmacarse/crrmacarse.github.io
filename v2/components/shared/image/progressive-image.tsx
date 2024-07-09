import React, { useState } from 'react';

export interface ImageProps {
    className?: string,
    image: {
        src: string,
        alt?: string,
    }
}

const loaderMockUpStyles = {
  // background: '#edf2f7',
  position: 'absolute' as 'absolute',
  filter: 'blur(1px)',
  transition: 'opacity ease-in 1000ms',
  clipPath: 'inset(0)',
};

// @TODO:
const ProgressiveImage = ({ className, image: { src, alt } }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const loaderMockUp = <div style={loaderMockUpStyles} />;

  return (
    <div className="relative">
      {!loaded && loaderMockUp}
      <img className={className} src={src} alt={alt} onLoad={() => setLoaded(true)} />
    </div>
  );
};

export default ProgressiveImage;
