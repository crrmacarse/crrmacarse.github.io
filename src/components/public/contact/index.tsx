import React from 'react';
import { useTranslation } from 'react-i18next';
import UnderConstructionImage from 'assets/images/under-construction.png';

// @TODO:
// contact page
// to reach out and email
const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-section flex flex-col items-center justify-center">
      <img className="h-64 m-10" src={UnderConstructionImage} alt="ongoing" />
      <p className="text-sm">
        {t('notice')}
        <a href="https://crrmacarse.github.io/old-portfolio/" className="font-bold">{t('here')}</a>
      </p>
    </div>
  );
};

export default Contact;
