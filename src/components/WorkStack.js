import React from 'react';

import Frontmatters from '../frontmatters';
import ListContent from '../renderers/list_content';
import './WorkStack.css';

const WorkStack = () => (
  <div className="section-works">
    {Frontmatters.works.map((work, i) =>
      <article key={i} className="work">
        {<div className="date">{work.workingTo ? work.workingTo.toDateString() : "Now"}</div>}
        <div className="details">
          <div className="role">{work.role}</div>
          <h3 className="title">{work.title}</h3>
          <div className="stack">
            <ListContent collection={work.stack} />
          </div>
        </div>
        <div className="date">{work.workingFrom.toDateString()}</div>
      </article>
    )}
  </div>
);

export default WorkStack;
