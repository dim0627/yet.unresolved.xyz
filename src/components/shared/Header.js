import React, { Component } from 'react';
import Frontmatters from '../../frontmatters';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="l-header">
        <div className="l-container">
          <div className="logo"><a href="/">{Frontmatters.site_name}</a></div>
          <div className="ops">
            <a href="#me">Me</a>
            <a href="#projects">Projects</a>
            <a href="#works">Works</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
