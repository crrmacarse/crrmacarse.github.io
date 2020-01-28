import React from 'react';
import { Link } from 'react-router-dom';

export interface NavProps {
  routes: { value: string, component: React.ComponentType }[],
  current: string,
}

const Nav = ({ routes, current }: NavProps) => (
  <div className="navigation text-xl">
    <ul className="navigation-links">
      {routes.map(({ value }, key) => (
        <li key={key}>
          <Link
            to={{
              state: value,
            }}
            className={`py-1 ${current === value && 'text-orange-600 font-bold'}`}
          >
            {value}
          </Link>
        </li>

      ))}
    </ul>

  </div>
);

export default Nav;
