import React from 'react';

const Project = ({ translate }: { translate: any }) => (
  <ul className="lg:w-1/6 w-1/2 p-3">
    <h4 className="font-bold mb-2">{translate('footer.About this Project')}</h4>
    <li><a href="https://github.com/crrmacarse/crrmacarse.github.io">{translate('footer.Source Code')}</a></li>
    <li><a href="https://github.com/crrmacarse/crrmacarse.github.io/blob/source/docs/FEATURES.MD">{translate('footer.Features')}</a></li>
    <li><a href="https://github.com/crrmacarse/crrmacarse.github.io/blob/source/docs/ROADMAP.MD">{translate('footer.Roadmap')}</a></li>
    <li><a href="https://github.com/crrmacarse/crrmacarse.github.io/blob/source/docs/CHANGELOG.MD">{translate('footer.Changelogs')}</a></li>
  </ul>
);

export default Project;
