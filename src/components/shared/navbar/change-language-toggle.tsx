import React from 'react';
import { useTranslation } from "react-i18next";
// import * as PhilippineFlag from 'assets/images/flags/philippines.svg'
// import * as USFlag from 'assets/images/flags/united-states-of-america.svg'

// @TODO: Find how svg works in TS
const ChangeLanguage = ({ className }: { className?: string }) => {
    const { t, i18n } = useTranslation();

    const handleChangeLanguage = () => {
        const language = /^[en]/.test(i18n.language) ? "tl" : "en"

        i18n.changeLanguage(language)
    }

    console.log(i18n)
    const renderLang =  /^[en]/.test(i18n.language) ? "EN" : "PH";

    return <div className={className} onClick={handleChangeLanguage}>{renderLang}</div>
}

export default ChangeLanguage;