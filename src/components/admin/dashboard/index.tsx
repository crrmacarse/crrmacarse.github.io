import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProjects } from 'actions/projects';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

export interface TestTypes {
  projects: any,
  fetch: () => void,
}

const AdminDashboard = ({ projects, fetch }: TestTypes) => {
  useEffect(() => { fetch(); }, []);

  console.warn('@warn', projects);

  return (
    <div className="admin-section flex items-center h-screen justify-center flex-col">
      <h1>ADMIN DASHBOARD</h1>
      <ul className="mt-5">
        <li>
          <Link to={ROUTES.ADMIN_PROJECTS}>PROJECTS</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN_BLOG}>BLOGS</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN_PERSONAL}>PERSONAL</Link>
        </li>
      </ul>
    </div>
  );
};

// TODO: Find a proper way
const mapStateToProps = ({ projects }: { projects: any}) => ({
  projects: projects.list,
});

const mapDispatchToProps = {
  fetch: getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
