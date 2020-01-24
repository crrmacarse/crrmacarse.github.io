import React from 'react';

export interface CardProps {
    title: string,
    image: {
        src: string,
        alt?: string,
    },
    description: string,
    tags?: string[],
}

// @TODO: Add image loader
const Card = ({ title, description, tags = [], image: { src, alt = "Project" } }: CardProps) => (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
        <img className="w-full object-center" src={src} alt={alt} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-base">
                {description}
            </p>
        </div>
        <div className="px-6 py-4">
            {tags.map(tag => <span className="inline-block text-sm font-semibold mr-3">
                {`#${tag}`}
            </span>
            )}
        </div>
    </div>
)

export default Card