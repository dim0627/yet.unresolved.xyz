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
    const asides = (
      <div className="asides">
        {project.sourceUrl &&
          <a href="{project.sourceUrl}" target="_blank" rel="nofollow">
            <i className="fa fa-github fa-fw" aria-hidden="true"></i>
            <span>GitHub</span>
          </a>
        }
        {project.relatedUrl &&
          <a href="{project.relatedUrl}" target="_blank" rel="nofollow">
            <i className="fa fa-link fa-fw" aria-hidden="true"></i>
            <span>Related</span>
          </a>
        }
      </div>
    );

    return(
      <article key={i} className="project">
        <h3 className="title">{project.title}</h3>
        <div className="description">{project.descriptionShort}</div>
        {asides}
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
