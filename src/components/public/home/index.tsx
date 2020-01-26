import React from 'react';
import { useTrail, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x: number, y: number) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

// @TODO:
// Add Proceed to transition to
// cleaner not chaotic version.
// It'll include ReadMes and stuff
// The website will be the showcase of
// what i could do
// A feature-rich application written
// with cosnsideration and care. A 200kb
// bundle application
// Learn more/Proceed
const Home = () => {
  const { t } = useTranslation();
  const [trail, set] = useTrail<any>(3, () => (
    { xy: [0, 0], config: (i: any) => (i === 0 ? fast : slow) }
  ));

  return (
    <div className="home-section flex flex-col items-center justify-center">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
        </filter>
      </svg>
      <div className="hooks-main" onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props: any, key) => (
          <animated.div key={key} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div>
      <div className="z-10 cursor-default">
        <h1>{t('home.title')}</h1>
        <p className="text-xs lg:text-lg">
          {t('home.subtitle')}
        </p>
      </div>
    </div>
  );
};

export default Home;
