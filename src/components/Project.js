import React, { Component } from 'react';

import './Project.css';

class Project extends Component {
  render() {
    const asides = (
      (this.props.sourceUrl || this.props.relatedUrl) &&
      <div className="asides">
        {this.props.sourceUrl &&
          <a href={this.props.sourceUrl} target="_blank" rel="nofollow">
            <i className="fa fa-github fa-fw" aria-hidden="true"></i>GitHub
          </a>
        }
        {this.props.relatedUrl &&
          <a href={this.props.relatedUrl} target="_blank" rel="nofollow">
            <i className="fa fa-link fa-fw" aria-hidden="true"></i>Link
          </a>
        }
      </div>
    );

    return(
      <article className="project">
        <h3 className="title">{this.props.title}</h3>
        <div className="description">{this.props.descriptionShort}</div>
        {asides}
      </article>
    );
  }
}

export default Project;
