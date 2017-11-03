import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionId: "",
      title: "",
    };
  }

  renderBody() { }

  render() {
    return (
      <section id={this.state.sectionId} className="general-section">
        <div className="l-container">

          <div className="panes">
            <div className="pane">
              <h2 className="section-title">{this.state.title}</h2>
            </div>

            <div className="pane">
              {this.renderBody()}
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Section;
