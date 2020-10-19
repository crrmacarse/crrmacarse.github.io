import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { useTranslation } from 'react-i18next';

const GOOGLE_DOCS_LINK = 'https://docs.google.com/document/d/1HOZNeObFb-aLNcEhRIkXHkv1iaP5CtYcpIgsaLcqP3o';
const DOWNLOADABLE_LINK = `${GOOGLE_DOCS_LINK}/export?format=pdf`.trim();

/**
 * @TODO: Link passing on PDF file doesn't seem to work
 */
const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="resume-section flex flex-col items-center lg:justify-center justify-around">
      <Document file="/assets/resume.pdf">
        <Page width={900} pageNumber={1} />
      </Document>
      <p className="lg:hidden text-center">Sorry, PDF Viewer doesn&apos;t work in mobile.</p>
      <div className="footer font-bold text-lg text-center">
        <a href={GOOGLE_DOCS_LINK} className="md:mx-8 mx-3">{t('View Google Docs Version')}</a>
        <a href={DOWNLOADABLE_LINK} className="block md:inline lg:mx-8 mx-3">{t('Download')}</a>
      </div>
    </div>
  );
};

export default Resume;
