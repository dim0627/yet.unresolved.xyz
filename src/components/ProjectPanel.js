import React, { Component } from 'react';

import listContent from '../renderers/list_content';
import './ProjectPanel.css';

class ProjectPanel extends Component {
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
      <article className="project-panel">
        <h2 className="title">{this.props.title}</h2>
        <div className="stack">
          {listContent(this.props.stack)}
        </div>
        <div className="description">{this.props.descriptionShort}</div>
        {asides}
      </article>
    );
  }
}


export default ProjectPanel;
