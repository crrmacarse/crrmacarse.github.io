import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Project from './about-project';
import Contact from './contact';

const Footer = () => {
  const { t } = useTranslation();

  const renderHighlight = (
    <div className="my-3">
      <div className="flex md:items-center justify-between flex-col md:flex-row">
        <p className="text-sm">
          {t('footer.note')}
          <small className='text-xs mx-1'>(v2.1.0)</small>
          🫶
        </p>
        <ul className="text-lg md:flex block md:items-center space-x-2">
          <small className="text-xs">{`${t('Powered by')}:`}</small>
          <div className="flex items-center md:my-0 mb-1">
            <FontAwesomeIcon icon={faReact} />
            <span title="React" className="font-bold text-sm ml-1 ">React</span>
          </div>
          <li>
          <img
            width={23}
            title="Webpack"
            src="/assets/svgs/webpack.svg"
            alt="Webpack"
          />
          </li>
          <li>
          <img
            width={20}
            title="Typescript"
            src="/assets/svgs/typescript.svg"
            alt="typescript"
          />
          </li>
        </ul>
      </div>
    </div>
  );

  const renderActions = (
    <div className="text-xs font-bold">
      <a href="mailto:crrmacarse@gmail.com?" className="mr-3 block md:inline-block">{t('Send a direct email')}</a>
    </div>
  );

  return (
    <div className="footer-section bg-[#f3f3f3] dark:bg-[#2c353c]">
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
