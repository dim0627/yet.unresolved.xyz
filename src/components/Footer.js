import React, { Component } from 'react';
import Constants from '../Constants';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="l-footer">
      <div className="l-container">
      <div className="copy">&copy; {Constants.site_name}</div>
      <div className="author">{Constants.author}</div>
      </div>
      </footer>
    );
  }
}

export default Footer;
