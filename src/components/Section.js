import React, { Component } from 'react';
import Constants from '../Constants';
import './Section.css';

class Section extends Component {
  render() {
    return (
      <section className="general-section">
        <div className="l-container">

          <div className="pane-half">
            <h2 className="title">{this.props.title}</h2>
          </div>

          <div className="pane-half">
          </div>

        </div>
      </section>
    );
  }
}

export default Section;
