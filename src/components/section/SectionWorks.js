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

  renderBody() {
    return (
      <div className="section-works">
      </div>
    );
  }
}

export default SectionWorks;
