import React from 'react';
import Card from './card'
import SampleProjects from './sample'

// @TODO: Where should i save the projects
// not perfectly centered. find alternative
const Portfolio = () => {
    return <div className="portfolio-section">
        <ul className="flex flex flex-wrap justify-start content-center items-baseline w-11/12 mx-auto">
            {SampleProjects.map(({ title, description, tags, image }, key) => <li className="m-3" key={key}>
                <Card title={title} description={description} image={image} tags={tags} />
            </li>
            )}
        </ul>
    </div>
}

export default Portfolio;