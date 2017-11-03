import React, { Component } from 'react';
import Constants from '../Constants';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="l-container">
          <h1 className="title" dangerouslySetInnerHTML={{__html: Constants.motto}} />
        </div>
      </section>
    );
  }
}

export default Hero;
