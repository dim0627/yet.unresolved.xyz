import React, { Component } from 'react';

import Frontmatters from '../frontmatters';
import listContent from '../renderers/list_content';
import './WorkStack.css';

class WorkStack extends Component {
  render() {
    const works = Frontmatters.works.map((work) => {
      return (
        <article key={work.title} className="work">
          {<div className="date">{work.workingTo ? work.workingTo.toDateString() : "Now"}</div>}
          <div className="details">
            <div className="role">{work.role}</div>
            <h3 className="title">{work.title}</h3>
            <div className="stack">
              {listContent(work.stacks)}
            </div>
          </div>
          <div className="date">{work.workingFrom.toDateString()}</div>
        </article>
      );
    });

    return (
      <div className="section-works">
        {works}
      </div>
    );
  }
}

export default WorkStack;
