import React from 'react';
import { Helmet } from 'react-helmet';

const BASE_TITLE = '@crrmacarse';

const ReactHelmet = ({ title }: { title: string }) => {
  const cleaned = title.replace(/\//, '');
  const formatted = (cleaned.charAt(0).toUpperCase() + cleaned.slice(1)).trim();
  const newTitle = cleaned ? `${BASE_TITLE} | ${formatted}` : BASE_TITLE;

  return (
    <Helmet>
      <title>{newTitle}</title>
    </Helmet>
  );
};

export default ReactHelmet;
