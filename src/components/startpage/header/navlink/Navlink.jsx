import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../../routes';
import '../navlink/Navlink.css';

function Navlink () {
  return (
    <nav>
      <NavLink className="nav_link" to={routes.login.path}>{routes.login.text}</NavLink>
      <NavLink className="nav_link" to={routes.signUp.path}>{routes.signUp.text}</NavLink>
    </nav>
  );
}

export default Navlink;
