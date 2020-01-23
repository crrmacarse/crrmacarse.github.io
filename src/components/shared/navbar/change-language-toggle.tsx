import React from 'react';
import { useTranslation } from "react-i18next";
// import * as PhilippineFlag from 'assets/images/flags/philippines.svg'
// import * as USFlag from 'assets/images/flags/united-states-of-america.svg'

// @TODO: Find how svg works in TS
const ChangeLanguage = ({ className }: { className?: string }) => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = () => {
        const language = i18n.language === "en" ? "tl" : "en"

        i18n.changeLanguage(language)
    }

    const renderLang = i18n.language === 'en' ? "EN" : "PH";

    return <li className={className} onClick={handleChangeLanguage}>{renderLang}</li>
}

export default ChangeLanguage;