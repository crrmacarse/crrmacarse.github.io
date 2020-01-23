import React from 'react';
import { NavLink as Link } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import ChangeButtonToggle from './change-language-toggle'

export interface NavbarProps {
    theme: string,
    toggleTheme: () => void
}

const darkModeIcon = <i className="far text-lg fa-moon"></i>
const lightModeIcon = <i className="fas text-lg fa-sun"></i>

const Navbar = ({ theme, toggleTheme }: NavbarProps) => <nav className="navbar-section flex items-center justify-between flex-wrap p-5">
    <div className="flex items-center flex-grow">
        <Link className="font-semibold text-xl" to={ROUTES.HOME}>Christian Ryan R. Macarse</Link>
    </div>
    <ul className="w-full block flex-shrink-0 lg:flex lg:items-center lg:w-auto">
        <Link exact className="mx-3 p-1" activeClassName="active border-b-2" to={ROUTES.PORTFOLIO}>Portfolio</Link>
        <Link exact className="mx-3 p-1" activeClassName="active border-b-2" to={ROUTES.RESUME}>Resume</Link>
        <Link exact className="mx-3 p-1" activeClassName="active border-b-2" to={ROUTES.ABOUT}>About</Link>
        <Link exact className="mx-3 p-1" activeClassName="active border-b-2" to={ROUTES.PERSONAL}>Personal</Link>
        <ChangeButtonToggle className="mx-3 cursor-pointer text-sm select-none" />
        <li className="mx-3 cursor-pointer" onClick={toggleTheme}>{theme === 'dark' ? lightModeIcon : darkModeIcon}</li>
    </ul>
</nav>

export default Navbar;
