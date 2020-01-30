import React from 'react';

export interface BlinkerProps {
  title?: string,
  className?: string,
  width?: number,
  height?: number,
  color?: string,
  radius?: number,
}

const Blinker = ({
  title = 'Try me!',
  className = '',
  color = 'red',
  width = 10,
  height = 10,
  radius = 10,
}: BlinkerProps) => {
  const blinkerStyle: React.CSSProperties = {
    width,
    height,
    borderRadius: radius,
    backgroundColor: color,
  };

  return (
    <div className="blinker-container" title={title}>
      <i className={`blink ${className}`} style={blinkerStyle} />
    </div>
  );
};

export default Blinker;
