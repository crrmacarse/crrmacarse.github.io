import React from 'react';
import { Link } from 'react-router-dom';
import { ADMIN } from 'constants/routes';

const Login = () => (
  <div className="admin-login-section flex items-center h-screen justify-center flex-col">
    <h1 className="text-3xl mb-2">
      ADMIN LOGIN
      <b>{' (ONGOING)'}</b>
    </h1>
    <Link to={ADMIN}>GO TO DASHBOARD</Link>
  </div>
);

export default Login;
