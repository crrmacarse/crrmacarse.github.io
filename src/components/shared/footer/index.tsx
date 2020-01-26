import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-section">
      <div className="flex items-start justify-around lg:w-3/4 mx-auto py-10">
        <ul className="lg:w-1/6 m-3">
          <h4 className="font-bold mb-2">{t('footer.Still Interested?')}</h4>
          <Link to={ROUTES.CONTACT}>{`${t('Get in touch')}.`}</Link>
          <li><a href="https://github.com/crrmacarse/portfolio-remake">{t('footer.Source Code')}</a></li>
          <li><Link to={ROUTES.MORE}>{t('footer.More')}</Link></li>
        </ul>
        <ul className="lg:w-1/6 m-3">
          <li><h4 className="font-bold mb-2">{t('footer.Links')}</h4></li>
          <li><a href="https://github.com/crrmacarse">Github</a></li>
          <li><a href="https://www.linkedin.com/in/christian-ryan-r-macarse-692974166/">LinkedIn</a></li>
          <li><a href="https://twitter.com/pablongbuhaymo">Twitter</a></li>
        </ul>
        <div className="flex-grow m-3">
          <h4 className="font-bold mb-2">{t('footer.Random Fun Facts')}</h4>
          <p className="max-w-2xl">{t('footer.facts')}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
