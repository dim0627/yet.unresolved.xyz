import React, { Component } from 'react';
import Constants from '../../Constants';
import './Section.css';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  renderBody() { }

  render() {
    return (
      <section className="general-section">
        <div className="l-container">

          <div className="panes">
            <div className="pane">
              <h2 className="title">{this.state.title}</h2>
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

export class SectionMe extends Section {
  constructor(props) {
    super(props);
    this.state = {
      title: "Me",
    };
  }

  renderBody() {
    return (
      <div className="section-me">
      </div>
    );
  }
}

export default Section;
