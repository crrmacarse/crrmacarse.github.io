import React, { useState, Fragment } from 'react';
import { useTransition, animated } from 'react-spring';

const Title = () => {
  const [show] = useState(false);
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <Fragment>
      {transitions.map(({ key, props }) => (
        <animated.div key={key} style={props}>
          <p className="text-5xl">
            Send Nudes
            <span role="img" aria-label="wink">😉</span>
          </p>
        </animated.div>
      ))}
    </Fragment>
  );
};

export default Title;
