// import { Document, Page } from 'react-pdf';
import { useTranslation } from 'react-i18next';
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const GOOGLE_DOCS_LINK = 'https://drive.google.com/file/d/1NozqdnWpFYNkGeq8nS08Rpde0o75ClFn';
const DOWNLOADABLE_LINK = `${GOOGLE_DOCS_LINK}/export?format=pdf`.trim();

const ResumePage = () => {
  const { t } = useTranslation();

  return (
    <div className="resume-section flex flex-col items-center lg:justify-center justify-around min-h-screen py-20">
      {/* <Document file={DOWNLOADABLE_LINK}>
        <Page width={900} pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
      </Document> */}
      {/* <p className="lg:hidden text-center">Sorry, PDF Viewer doesn&apos;t work in mobile.</p> */}
      <iframe src="https://drive.google.com/file/d/1NozqdnWpFYNkGeq8nS08Rpde0o75ClFn/preview" width="90%" height="900" allow="autoplay" className='mb-8'></iframe>
      <div className="footer font-bold text-lg text-center">
        <a href={GOOGLE_DOCS_LINK} className="md:mx-8 mx-3">{t('View Google Docs Version')}</a>
        <a href={DOWNLOADABLE_LINK} className="block md:inline lg:mx-8 mx-3">{t('Download')}</a>
      </div>
    </div>
  )
}

export default ResumePage;
