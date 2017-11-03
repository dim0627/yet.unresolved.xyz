import React from 'react';
import Frontmatters from '../../frontmatters';
import listContent from '../../renderers/list_content';
import Section from './Section';
import './SectionWorks.css';

export class SectionWorks extends Section {
  constructor(props) {
    super(props);
    this.state = {
      sectionId: "works",
      title: "Works",
    };
  }

  renderWork(work, i) {
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

  renderBody() {
    return (
      <div className="section-works">
        {Frontmatters.works.map(this.renderWork)}
      </div>
    );
  }
}

export default SectionWorks;
