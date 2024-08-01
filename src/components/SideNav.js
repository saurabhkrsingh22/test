import React from 'react';
import {Link } from 'react-router-dom';
import './SideNav.css';
const SideNav = () => {
  return (
    <div className="sidenav">
    <nav>
      
        <ul>
        <li>
          <Link to="/bill-generator">Bill Generator</Link>
        </li>
        <li>
          <Link to="/customers">Customers List</Link>
        </li>
        
      
      </ul>
      </nav>
      </div>
  );
};

export default SideNav;
