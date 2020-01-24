import React from 'react';
import Card from './card'
import SampleProjects from './sample'

// @TODO: Where should i save the projects
// not perfectly centered. find alternative
// add filter here to personal and company related projects
// add pagination?
const Portfolio = () => {
    return <div className="portfolio-section">
        <ul className="flex flex flex-wrap justify-start content-center items-baseline w-11/12 mx-auto">
            {SampleProjects.map((projects, key) => <li className="m-5" key={key}>
                <Card {...projects} />
            </li>
            )}
        </ul>
    </div>
}

export default Portfolio;