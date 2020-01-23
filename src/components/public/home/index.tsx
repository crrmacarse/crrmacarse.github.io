import React from 'react';
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return <div className="home-section flex flex-col items-center justify-center">
        <h1 className="text-6xl">{t("Hello")}</h1>
    </div>;
}
export default Home;