import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjects } from 'actions/projects';
import Card from './card';

interface PortfolioProps {
  fetchList: () => void,
  isFetching: boolean,
  list: any,
}

// @TODO:
// add filter here to personal and company related projects
// add pagination?
const Portfolio = ({ list, isFetching, fetchList }: PortfolioProps) => {
  useEffect(() => { fetchList(); }, []);

  return (
    <div className="portfolio-section">
      <ul className="flex flex flex-wrap justify-start content-center items-baseline w-11/12 mx-auto">
        {isFetching && <p>Fetching...</p>}
        {list.map((project: any, key: number) => (
          <li className="px-1 py-5 mx-auto" key={key}>
            <Card {...project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ projects }: {projects: any}) => ({
  list: projects.list,
  isFetching: projects.isFetching,
});

const mapDispatchToProps = {
  fetchList: getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
