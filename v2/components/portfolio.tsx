import orderBy from 'lodash/orderBy';
import Card from './card';
import db from '@v2/firebase/db';
import { useEffect, useState } from 'react';
import { PROJECTS_DATA } from '@v2/constants/projects';

// @TODO:
// add filter here to personal and company related projects
const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.ref('/projects').once('value').then((snapshot) => {
      setProjects([...PROJECTS_DATA, ...snapshot.val()]);
    });
  }, [])

  return (
    <div className="portfolio-section min-h-screen mt-36">
      <ul className="w-11/12 mx-auto grid-cols-3 grid gap-5">
        {orderBy(projects, 'priority').map((project: any, key: number) => (
          <li key={key} className="lg:mx-auto">
            <Card {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioPage;
