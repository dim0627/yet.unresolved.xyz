import React from 'react';

import ListContent from '../renderers/list_content';
import './ProjectPanel.css';

const ProjectPanel = ({title, stack, descriptionShort, sourceUrl, relatedUrl}) => (
  <article className="project-panel">
    <h2 className="title">{title}</h2>
    <div className="stack">
      <ListContent collection={stack} />
    </div>
    <div className="description">{descriptionShort}</div>
    {
      (sourceUrl || relatedUrl) &&
      <div className="asides">
        {sourceUrl &&
          <a href={sourceUrl} target="_blank" rel="nofollow">
            <i className="fa fa-github fa-fw" aria-hidden="true"></i>GitHub
          </a>
        }
        {relatedUrl &&
          <a href={relatedUrl} target="_blank" rel="nofollow">
            <i className="fa fa-link fa-fw" aria-hidden="true"></i>Link
          </a>
        }
      </div>
    }
  </article>
);

export default ProjectPanel;
