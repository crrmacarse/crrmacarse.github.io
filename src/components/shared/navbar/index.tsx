import React from 'react';
import { useTranslation } from "react-i18next";
import { NavLink as Link } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import ChangeButtonToggle from './change-language-toggle'

export interface NavbarProps {
    theme: string,
    toggleTheme: () => void
}

const darkModeIcon = <i className="far text-lg fa-moon"></i>
const lightModeIcon = <i className="fas text-lg fa-sun"></i>

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
    const { t } = useTranslation();

    return <nav className="navbar-section flex items-center justify-between flex-wrap fixed top-0 w-full py-8 lg:px-16 px-5">
        <div className="flex items-center flex-grow">
            <Link className="font-semibold text-xl" to={ROUTES.HOME}>Christian Ryan R. Macarse</Link>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
        </div>
        <ul className="w-full hidden lg:block flex-shrink-0 lg:flex lg:items-center lg:w-auto">
            <Link exact className="block lg:inline-block my-2 lg:my-0 mx-3 p-1" activeClassName="active border-b-2" to={ROUTES.PORTFOLIO}>{t('navbar.Portfolio')}</Link>
            <Link exact className="block lg:inline-block my-2 lg:my-0 mx-3 p-1" activeClassName="active border-b-2" to={ROUTES.RESUME}>{t('navbar.Resume')}</Link>
            <Link exact className="block lg:inline-block my-2 lg:my-0 mx-3 p-1" activeClassName="active border-b-2" to={ROUTES.ABOUT}>{t('navbar.About')}</Link>
            <Link exact className="block lg:inline-block my-2 lg:my-0 mx-3 p-1" activeClassName="active border-b-2" to={ROUTES.PERSONAL}>{t('navbar.Personal')}</Link>
        </ul>
        <div className="hidden lg:flex">
            <ChangeButtonToggle className="mx-3 my-2 lg:my-0 cursor-pointer text-sm select-none uppercase" />
            <div className="mx-3 my-2 lg:my-0 cursor-pointer" onClick={toggleTheme}>{theme === 'dark' ? lightModeIcon : darkModeIcon}</div>
        </div>
    </nav>
}

export default Navbar;
