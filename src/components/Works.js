import React, { Component } from 'react';
import Frontmatters from '../frontmatters';
import listContent from '../renderers/list_content';
import './Works.css';

function renderWork(work, i) {
  return (
    <article key={i} className="work">
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
}

class Works extends Component {
  render() {
    return (
      <div className="section-works">
        {Frontmatters.works.map(renderWork)}
      </div>
    );
  }
}

export default Works;
