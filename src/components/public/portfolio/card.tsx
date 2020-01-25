import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface CardProps {
    title: string,
    image: {
        src: string,
        alt?: string,
    },
    description: string,
    tags?: string[],
    links?: {
        github?: string,
        website?: string,
    }
}

const Card = ({
  title, description, tags = [], image: { src, alt = 'Project' }, links,
}: CardProps) => (
  <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
    <img className="w-full object-cover h-64" src={src} alt={alt} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-base">
        {description}
      </p>
    </div>
    <div className="px-6 py-4 flex justify-between">
      <ul className="block">
        {tags.map((tag, key) => (
          <span key={key} className="inline-block text-sm font-semibold mr-3">
            {`#${tag}`}
          </span>
        ))}
      </ul>
      {links
                && (
                <div>
                  {links.website && <a href={links.website} className="mr-2" aria-label="link"><FontAwesomeIcon icon="code" /></a>}
                  {links.github && <a href={links.github} className="mr-2" aria-label="link"><FontAwesomeIcon icon="window-maximize" /></a>}
                </div>
                )}
    </div>
  </div>
);

export default Card;
