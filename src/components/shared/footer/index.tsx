import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import * as ROUTES from 'constants/routes';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-section">
      <div className="flex items-start justify-around lg:w-3/4 mx-auto py-10">
        <ul className="lg:w-1/6 m-3">
          <h4 className="font-bold mb-2">{t('footer.About this Project')}</h4>
          <li><a href="https://github.com/crrmacarse/crrmacarse.github.io">{t('footer.Source Code')}</a></li>
          <li><a href="https://github.com/crrmacarse/crrmacarse.github.io/blob/source/FEATURES.MD">{t('footer.Features')}</a></li>
          <li><a href="https://github.com/crrmacarse/crrmacarse.github.io">{t('footer.Roadmap')}</a></li>
          <li><a href="https://github.com/crrmacarse/crrmacarse.github.io/blob/source/CHANGELOG.MD">{t('footer.Changelogs')}</a></li>
        </ul>
        <ul className="lg:w-1/6 m-3">
          <h4 className="font-bold mb-2">{t('Get in touch')}</h4>
          <li><a href="tel:+6399159039234">{t('Call')}</a></li>
          <li><a href="https://github.com/crrmacarse">Github</a></li>
          <li><a href="https://stackoverflow.com/users/10030210/crrmacarse">Stack Overflow</a></li>
          <li><a href="https://www.linkedin.com/in/christian-ryan-r-macarse-692974166/">LinkedIn</a></li>
          <li><a href="https://twitter.com/pablongbuhaymo">Twitter</a></li>
        </ul>
        <div className="flex-grow m-3">
          <h4 className="font-bold mb-2">{t('footer.Overview')}</h4>
          <div className="lg:max-w-2xl">
            <p className="">{t('footer.description')}</p>
            <div className="my-3">
              <div className="flex md:items-center justify-between flex-col md:flex-row">
                <p className="text-sm">
                  {`${t('footer.Written with love')}.`}
                </p>
                <ul className="text-lg md:flex block md:items-center">
                  <small className="text-xs mr-2">{`${t('Powered by')}:`}</small>
                  <div className="flex items-center md:my-0 mb-1 mr-2">
                    <FontAwesomeIcon icon={faReact} />
                    <span title="React" className="font-bold text-sm ml-1 ">React</span>
                  </div>
                  <img
                    title="Typescript"
                    src="https://camo.githubusercontent.com/575bd49b0da0bd09b6a4f346a134e8c42ce9c58c/68747470733a2f2f616c65656e34322e6769746875622e696f2f6261646765732f7372632f747970657363726970742e737667"
                    alt="typescript"
                  />
                </ul>
              </div>
            </div>
            <div className="text-xs font-bold">
              <a href="mailto:crrmacarse@gmail.com?" className="mr-3 block md:inline-block">{t('Send a direct email')}</a>
              <Link to={ROUTES.MORE} className="block md:inline-block">{t('More')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
