import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {

  return(
    <nav className="main-nav">
      <ul>
        <li><NavLink  to="/Cats">Cats</NavLink></li>
        <li><NavLink  to='/Flowers'>Flowers</NavLink></li>
        <li><NavLink  to="/Atumn">Atumn</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
