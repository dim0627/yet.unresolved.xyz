import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Frontmatters from '../../frontmatters';
import './Header.css';

const Header = () => (
  <header className="l-header">
    <div className="l-container">
      <div className="logo"><a href="/">{Frontmatters.site_name}</a></div>
      <div className="ops">
        <Link to="/#me">Me</Link>
        <Link to="/#projects">Projects</Link>
        <Link to="/#works">Works</Link>
      </div>
    </div>
  </header>
);

export default Header;
