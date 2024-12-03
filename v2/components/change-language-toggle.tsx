import React from 'react';
import { useTranslation } from 'react-i18next';
// import * as PhilippineFlag from 'assets/images/flags/philippines.svg'
// import * as USFlag from 'assets/images/flags/united-states-of-america.svg'

// @TODO: Find how svg works in TS
const ChangeLanguage = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = () => {
    const language = /^[en]/.test(i18n.language) ? 'tl' : 'en';

    i18n.changeLanguage(language);
  };

  const renderLang = /^[en]/.test(i18n.language) ? 'EN' : 'PH';

  return <div title="Switch Language" className={className} role="button" tabIndex={-1} onClick={handleChangeLanguage} onKeyDown={handleChangeLanguage}>{renderLang}</div>;
};

export default ChangeLanguage;
