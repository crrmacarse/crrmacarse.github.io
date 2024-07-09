import React from 'react';
import { Helmet } from 'react-helmet';
import MetaTags from 'constants/meta-tags';

const BASE_TITLE = '@crrmacarse';
const BASE_DESCRIPTION = "Christian Ryan Macarse's website portfolio. A showcase of my capability and knowledge with web development. See for yourself! | Christian Ryan Macarse";

const ReactHelmet = ({ title }: { title: string }) => {
  const cleaned = title.replace(/\//, '');
  const formatted = (cleaned.charAt(0).toUpperCase() + cleaned.slice(1)).trim();
  const newTitle = cleaned ? `${BASE_TITLE} | ${formatted}` : BASE_TITLE;

  const selectedMetaTag = MetaTags.find((meta) => meta.page === title);
  const { description = BASE_DESCRIPTION } = selectedMetaTag || {};

  return (
    <Helmet>
      <title>{newTitle}</title>
      <meta name="description" content={description} data-react-helmet="true" />
    </Helmet>
  );
};

export default ReactHelmet;
