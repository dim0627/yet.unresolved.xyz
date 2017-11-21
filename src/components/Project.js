import React from 'react';
import PropTypes from 'prop-types';

import ListContent from '../renderers/list_content';
import './Project.css';

const Project = ({title, stack, descriptionShort, sourceUrl, relatedUrl}) => (
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
          <a href={relatedUrl} target="_blank">
            <i className="fa fa-link fa-fw" aria-hidden="true"></i>Link
          </a>
        }
      </div>
    }
  </article>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  stack: PropTypes.element.isRequired,
  descriptionShort: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string,
  relatedUrl: PropTypes.string,
};

export default Project;
