import React from 'react';

export interface NavProps {
  routes: { value: string, component: React.ComponentType }[],
  current: string,
  setCurrent: (value: string) => void,
}

const Nav = ({ routes, current, setCurrent }: NavProps) => (
  <div className="navigation text-xl">
    <div className="navigation-links">
      {routes.map(({ value }, key) => (
        <div
          key={key}
          role="button"
          className={`py-1 ${current === value && 'text-orange-600 font-bold'}`}
          tabIndex={key}
          onClick={() => setCurrent(value)}
          onKeyDown={() => setCurrent(value)}
        >
          {value}
        </div>
      ))}
    </div>

  </div>
);

export default Nav;
