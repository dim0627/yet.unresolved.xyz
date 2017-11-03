import React, { Component } from 'react';
import Constants from '../Constants';
import './Section.css';

class Section extends Component {
  render() {
    return (
      <section className="general-section">
      <div className="l-container">

      <div class="pane-half">
      <h2 className="title">
      <span>Me</span>
      </h2>
      </div>

      <div class="pane-half">
      </div>

      </div>
      </section>
    );
  }
}

export default Section;
