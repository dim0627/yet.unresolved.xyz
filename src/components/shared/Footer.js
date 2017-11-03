import React, { Component } from 'react';
import Frontmatters from '../../frontmatters';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="l-footer">
        <div className="l-container">
          <div className="copy">&copy; {Frontmatters.site_name}</div>
          <div className="author">{Frontmatters.author.name}</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
