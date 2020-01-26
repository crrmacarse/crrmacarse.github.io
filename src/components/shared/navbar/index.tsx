import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import * as ROUTES from 'constants/routes';
import ChangeButtonToggle from './change-language-toggle';

export interface NavbarProps {
  theme: string,
  toggleTheme: () => void
}

// @REFACTOR: navbar toggling
// @BUG: There seems to a bug that disregards initial click of
// dropdown on mobile. It won't change the background color at first try
// trying to replicate but it seems to appear out of nowhere.
const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const { t } = useTranslation();

  const navbarRepetetiveProps = {
    exact: true,
    className: 'block lg:inline-block my-2 lg:my-0 lg:mx-3 p-1',
    activeClassName: 'active lg:border-b-2',
    onClick: () => setOpen(false),
  };

  const navbarList = (
    <Fragment>
      <Link {...navbarRepetetiveProps} to={ROUTES.PORTFOLIO}>{t('navbar.Portfolio')}</Link>
      <Link {...navbarRepetetiveProps} to={ROUTES.RESUME}>{t('navbar.Resume')}</Link>
      <Link {...navbarRepetetiveProps} to={ROUTES.ABOUT}>{t('navbar.About')}</Link>
      <Link {...navbarRepetetiveProps} to={ROUTES.PERSONAL}>{t('navbar.Personal')}</Link>
    </Fragment>
  );

  const icon = theme === 'dark' ? faSun : faMoon;

  const priorityButtons = (
    <Fragment>
      <ChangeButtonToggle className="lg:mx-3 my-2 lg:my-0 cursor-pointer text-sm select-none uppercase" />
      <div id="theme-toggler" className="mx-3 my-2 lg:my-0 cursor-pointer" role="button" aria-label="Switch to Dark Mode" tabIndex={0} onClick={toggleTheme} onKeyDown={toggleTheme}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </Fragment>
  );

  const navbarClassName = open ? 'navbar-section-inverted' : 'navbar-section';

  return (
    <nav className={`${navbarClassName} flex items-center justify-between flex-wrap fixed top-0 w-full py-8 lg:px-16 px-5`}>
      <div className="flex items-center flex-grow">
        <Link className="font-semibold text-xl" to={ROUTES.HOME}>Christian Ryan R. Macarse</Link>
      </div>
      <div className="flex lg:hidden">
        {priorityButtons}
        <FontAwesomeIcon icon="bars" className="fas fa-bars text-xl cursor-pointer my-2" aria-label="Handle toggle" onClick={handleToggle} onKeyDown={handleToggle} />
      </div>
      {open && (
        <div className="block lg:hidden w-full flex-shrink-0 lg:items-center lg:w-auto">
          {navbarList}
        </div>
      )}
      <div className="hidden lg:flex w-full flex-shrink-0 lg:items-center lg:w-auto">
        {navbarList}
        {priorityButtons}
      </div>
    </nav>
  );
};

export default Navbar;
