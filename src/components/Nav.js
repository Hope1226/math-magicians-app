import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/nav.css';

const Nav = () => {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '20px',
  };

  const heroText = {
    fontSize: '40px',
    fontWeight: 900,
  };

  return (
    <nav>
      <h1 style={heroText}>Math Magicians</h1>
      <ul>
        <Link style={linkStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={linkStyle} to="/calculator">
          <li>Calculator</li>
        </Link>
        <Link style={linkStyle} to="/quote">
          <li>Quote</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
