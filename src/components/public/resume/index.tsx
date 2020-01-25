import React from 'react';
import { Document, Page } from 'react-pdf';
import { useTranslation } from 'react-i18next';
import ResumePDF from 'assets/pdfs/resume.pdf';

const DOWNLOADABLE_LINK = 'https://docs.google.com/document/d/1HOZNeObFb-aLNcEhRIkXHkv1iaP5CtYcpIgsaLcqP3o/export?format=pdf';

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="resume-section flex flex-col items-center">
      <Document file={ResumePDF}>
        <Page width={900} pageNumber={1} />
      </Document>
      <div className="footer flex justify-between">
        <a href={DOWNLOADABLE_LINK} className="font-bold text-lg">{t('Download')}</a>
      </div>
    </div>
  );
};

export default Resume;
