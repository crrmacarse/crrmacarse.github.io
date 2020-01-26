import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import { useTranslation } from 'react-i18next';
import ResumePDF from 'assets/pdfs/resume.pdf';

const GOOGLE_DOCS_LINK = 'https://drive.google.com/open?id=1HOZNeObFb-aLNcEhRIkXHkv1iaP5CtYcpIgsaLcqP3o';
const DOWNLOADABLE_LINK = `${GOOGLE_DOCS_LINK}/export?format=pdf`.trim();

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="resume-section flex flex-col items-center lg:justify-center justify-around">
      <Document file={ResumePDF}>
        <Page width={900} pageNumber={1} />
      </Document>
      <p className="lg:hidden">Sorry, PDF Viewer doesn&apos;t work in mobile.</p>
      <div className="footer font-bold text-lg">
        <a href={GOOGLE_DOCS_LINK} className="md:mx-8 mx-3">{t('View Google Docs Version')}</a>
        <a href={DOWNLOADABLE_LINK} className="lg:mx-8 mx-3">{t('Download')}</a>
      </div>
    </div>
  );
};

export default Resume;
