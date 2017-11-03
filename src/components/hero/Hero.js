import React, { Component } from 'react';
import Constants from '../../Constants';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="l-container">
          <h1 className="title">{Constants.motto}</h1>
        </div>
      </section>
    );
  }
}

export default Hero;
