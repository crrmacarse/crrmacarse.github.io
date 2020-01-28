import React, { useEffect, useState } from 'react';
import db from 'providers/firebase/db';
import isEmpty from 'lodash/isEmpty';
import Card from './card';

// @TODO:
// not perfectly centered. find alternative
// add filter here to personal and company related projects
// add pagination?
const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.ref('/projects').once('value').then((snapshot) => {
      setProjects(snapshot.val());
    });
  }, []);

  return (
    <div className="portfolio-section">
      <ul className="flex flex flex-wrap justify-start content-center items-baseline w-11/12 mx-auto">
        {isEmpty(projects) && <p>Fetching...</p>}
        {projects.map((project) => (
          <li className="m-5" key={project.id}>
            <Card {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
