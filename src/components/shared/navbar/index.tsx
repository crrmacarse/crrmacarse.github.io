import React from 'react';
import { Link } from 'react-router-dom'
import * as ROUTES from 'constants/routes'

const Navbar = () => <ul>
    <Link to={ROUTES.HOME}>Home</Link>
    <Link to={ROUTES.PORTFOLIO}>Portfolio</Link>
    <Link to={ROUTES.ABOUT}>About</Link>
    <Link to={ROUTES.CONTACT}>Contact</Link>
</ul>

export default Navbar;
