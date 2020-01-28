import React from 'react';
import Image from 'react-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NoImage from 'assets/images/no-image.jpg';

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
    <Image className="w-full object-cover h-64" src={[src, NoImage]} alt={alt} />
    <div className="p-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-base">
        {description}
      </p>
    </div>
    <div className="p-4 flex justify-between">
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
                  {links.website && <a href={links.website} className="mr-2" title="Check the website" target="_blank" rel="noopener noreferrer" aria-label="link"><FontAwesomeIcon icon="external-link-alt" /></a>}
                  {links.github && <a href={links.github} className="mr-2" title="Check the source code" target="_blank" rel="noopener noreferrer" aria-label="link"><FontAwesomeIcon icon={faGithub} /></a>}
                </div>
                )}
    </div>
  </div>
);

export default Card;
