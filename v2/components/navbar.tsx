import { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import * as ROUTES from '@v2/constants/routes';
import ChangeLanguage from './change-language-toggle';
import Blinker from '@v2/components/blinker';
import IsOffline from '@v2/components/is-offline';

export interface NavbarProps {
  visited: boolean,
  theme: string,
  isFirstTime: boolean,
  toggleTheme: () => void
}

// @REFACTOR: navbar toggling
// @BUG: There seems to a bug that disregards initial click of
// dropdown on mobile. It won't change the background color at first try
// trying to replicate but it seems to appear out of nowhere.
const Navbar = ({
  visited,
  theme,
  isFirstTime,
  toggleTheme,
}: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const { t } = useTranslation();

  const navbarRepetetiveProps = {
    exact: true,
    className: 'block lg:inline-block my-2 lg:my-0 lg:mx-3 p-1',
    activeClassName: 'active lg:border-b-2',
    onClick: () => setOpen(false),
  };

  const renderNavbarList = (
    <Fragment>
      <Link {...navbarRepetetiveProps} to={ROUTES.PORTFOLIO}>{t('Portfolio')}</Link>
      <Link {...navbarRepetetiveProps} to={ROUTES.RESUME}>{t('Resume')}</Link>
    </Fragment>
  );

  const icon = theme === 'dark' ? faSun : faMoon;

  const renderPriorityButtons = (
    <Fragment>
      <ChangeLanguage className="lg:mx-3 my-2 lg:my-0 cursor-pointer text-sm select-none uppercase" />
      <div id="theme-toggler" title="Switch Theme" className="mx-3 my-2 lg:my-0 cursor-pointer" role="button" aria-label="Switch to Dark Mode" tabIndex={-1} onClick={toggleTheme} onKeyDown={toggleTheme}>
        {!visited && isFirstTime && <Blinker title="Try the opposite theme!" />}
        <FontAwesomeIcon icon={icon} />
      </div>
    </Fragment>
  );

  const navbarClassName = open ? 'navbar-section-inverted' : 'navbar-section';

  const renderNavigationMain = (
    <nav className={`${navbarClassName} flex items-center justify-between flex-wrap fixed top-0 w-full py-8 lg:px-16 px-5 bg-white dark:bg-[#252c31]`}>
      <div className="flex items-center flex-grow">
        <Link id="main" title="Hire me." className="font-semibold text-lg" to={ROUTES.HOME}>Christian Ryan R. Macarse</Link>
      </div>
      <div className="flex lg:hidden">
        {renderPriorityButtons}
        <FontAwesomeIcon icon="bars" className="fas fa-bars text-xl cursor-pointer my-2" aria-label="Handle toggle" onClick={handleToggle} onKeyDown={handleToggle} />
      </div>
      {open && (
        <div className="block lg:hidden w-full flex-shrink-0 lg:items-center lg:w-auto">
          {renderNavbarList}
        </div>
      )}
      <div className="hidden lg:flex w-full flex-shrink-0 lg:items-center lg:w-auto">
        {renderNavbarList}
        {renderPriorityButtons}
      </div>
    </nav>
  );

  return (
    <Fragment>
      <IsOffline />
      {renderNavigationMain}
    </Fragment>
  );
};

export default Navbar;
