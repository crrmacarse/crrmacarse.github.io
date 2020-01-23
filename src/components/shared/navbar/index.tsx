import React from 'react';
import { NavLink as Link } from 'react-router-dom'
import * as ROUTES from 'constants/routes'

const Navbar = ({ toggleTheme }: { toggleTheme: () => void }) => <div className="navbar-section">
    <ul className="ui secondary pointing menu">
        <Link exact className="item" activeClassName="active" to={ROUTES.HOME}>Home</Link>
        <Link exact className="item" activeClassName="active" to={ROUTES.PORTFOLIO}>Portfolio</Link>
        <Link exact className="item" activeClassName="active" to={ROUTES.ABOUT}>About</Link>
        <Link exact className="item" activeClassName="active" to={ROUTES.CONTACT}>Contact</Link>
        <div className="item" onClick={toggleTheme}>Toggle</div>
    </ul>
</div>

export default Navbar;
