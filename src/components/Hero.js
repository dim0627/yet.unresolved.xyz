import React from 'react';
import Frontmatters from '../frontmatters';
import './Hero.css';

const Hero = () => (
  <section className="hero">
    <div className="l-container">
      <h1 className="title">{Frontmatters.motto}</h1>
    </div>
  </section>
);

export default Hero;
