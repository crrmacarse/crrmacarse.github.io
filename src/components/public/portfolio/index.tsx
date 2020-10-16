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
      <ul className="portfolio-section__grid w-11/12 mx-auto">
        {isFetching && <p>Fetching...</p>}
        {list.map((project: any, key: number) => (
          <li key={key}>
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
