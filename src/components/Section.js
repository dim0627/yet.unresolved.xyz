import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    return (
      <section id={this.props.sectionId} className="general-section">
        <div className="l-container">

          <div className="panes">
            <div className="pane">
              <h2 className="section-title">{this.props.sectionTitle}</h2>
            </div>

            <div className="pane">
              {this.props.children}
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Section;
