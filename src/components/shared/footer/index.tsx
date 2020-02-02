import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import * as ROUTES from 'constants/routes';
import Project from './project';
import Contact from './contact';

const Footer = () => {
  const { t } = useTranslation();

  const renderHighlight = (
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
  );

  const renderActions = (
    <div className="text-xs font-bold">
      <a href="mailto:crrmacarse@gmail.com?" className="mr-3 block md:inline-block">{t('Send a direct email')}</a>
      <Link to={ROUTES.MORE} className="block md:inline-block">{t('More')}</Link>
    </div>
  );

  return (
    <div className="footer-section">
      <div className="flex items-start justify-around lg:w-3/4 mx-auto py-10 flex-wrap lg:flex-no-wrap">
        <Project translate={t} />
        <Contact translate={t} />
        <div className="flex-grow p-3">
          <h4 className="font-bold mb-2">{t('footer.Overview')}</h4>
          <div className="lg:max-w-2xl">
            <p className="">{t('footer.description')}</p>
            {renderHighlight}
            {renderActions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
