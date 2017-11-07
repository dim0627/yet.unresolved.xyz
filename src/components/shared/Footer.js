import React from 'react';
import Frontmatters from '../../frontmatters';
import './Footer.css';

/* eslint jsx-a11y/anchor-has-content: 0 */
const Footer = () => (
  <footer className="l-footer">
    <div className="l-container">
      <div className="copy">&copy; {Frontmatters.site_name}</div>
      <div className="social">
        <a href={Frontmatters.author.social.github} target="_blank" rel="nofollow"><i className="fa fa-github fa-fw" aria-hidden="true"></i></a>
        <a href={Frontmatters.author.social.twitter} target="_blank" rel="nofollow"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></a>
        <a href={Frontmatters.author.social.facebook} target="_blank" rel="nofollow"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></a>
        <a href={Frontmatters.author.social.linkedin} target="_blank" rel="nofollow"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></a>
        <a href={`mailto:${Frontmatters.author.email}`}><i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;
