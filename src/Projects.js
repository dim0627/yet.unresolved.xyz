import React, { Component } from 'react';

import Frontmatters from './frontmatters';
import ProjectPanel from './components/ProjectPanel';
import PageHeader from './components/PageHeader';

class Projects extends Component {
  render() {
    const projects = Frontmatters.projects.map((project) => {
      return (
        <ProjectPanel key={project.title}
          title={project.title}
          descriptionShort={project.descriptionShort}
          sourceUrl={project.sourceUrl}
          relatedUrl={project.relatedUrl}
          stack={project.stack} />
      );
    });

    return (
      <div className="l-container narrow">
        <PageHeader title="Projects" additionalClass="page" />
        <div className="section-projects">
          {projects}
        </div>
      </div>
    );
  }
}

export default Projects;
