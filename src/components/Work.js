import React from 'react';
import PropTypes from 'prop-types';

import ListContent from '../renderers/list_content';
import './Work.css';

const Work = ({title, workingFrom, workingTo, role, stack}) => (
  <article className="work">
    {<div className="date">{workingTo ? workingTo.toDateString() : "Now"}</div>}
    <div className="details">
      <div className="role">{role}</div>
      <h3 className="title">{title}</h3>
      <div className="stack">
        <ListContent collection={stack} />
      </div>
    </div>
    <div className="date">{workingFrom.toDateString()}</div>
  </article>
);

Work.propTypes = {
  title: PropTypes.string.isRequired,
  workingFrom: PropTypes.object.isRequired,
  workingTo: PropTypes.object,
  role: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
};

export default Work;
