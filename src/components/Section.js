import React, { Component } from 'react';

import './Section.css';
import PageHeader from './PageHeader';

class Section extends Component {
  render() {
    return (
      <section id={this.props.sectionId} className="general-section">
        <div className="l-container">

          <div className="panes">
            <div className="pane">
              <PageHeader title={this.props.sectionTitle} />
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
