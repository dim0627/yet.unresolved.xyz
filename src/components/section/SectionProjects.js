import React from 'react';
import Constants from '../../Constants';
import Section from './Section';
import './SectionProjects.css';

export class SectionProjects extends Section {
  constructor(props) {
    super(props);
    this.state = {
      sectionId: "projects",
      title: "Projects",
    };
  }

  renderProject(project, i) {
    return(
      <article key={i} className="project">
        <h3 className="title">{project.title}</h3>
        <div className="description">{project.descriptionShort}</div>
      </article>
    );
  }

  renderBody() {
    return (
      <div>
        <div className="section-projects">
          {Constants.projects.filter((p) => p.index).map(this.renderProject)}
        </div>
        <div className="readmore">
          <a href="/projects">See All Projects</a>
        </div>
      </div>
    );
  }
}

export default SectionProjects;
