import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

const AdminDashboard = () => (
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

export default AdminDashboard;
