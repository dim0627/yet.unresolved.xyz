import React, { Component } from 'react';
import Frontmatters from '../../frontmatters';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="l-container">
          <h1 className="title">{Frontmatters.motto}</h1>
        </div>
      </section>
    );
  }
}

export default Hero;
