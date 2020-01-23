import React from 'react';
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return <div className="home-section flex flex-col items-center justify-center">
        <h1 className="text-6xl">{t("home.title")}</h1>
        <p className="text-sm">{t('home.subtitle')} <a href="https://crrmacarse.github.io/old-portfolio/" className="font-bold">{t('Click here')}</a></p>
    </div>;
}

export default Home;