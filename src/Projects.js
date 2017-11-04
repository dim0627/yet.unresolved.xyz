import React, { Component } from 'react';

import Frontmatters from './frontmatters';
import ProjectPanel from './components/ProjectPanel';

class Projects extends Component {
  render() {
    const projects = Frontmatters.projects.map((project) => {
      return (
        <ProjectPanel title={project.title}
          descriptionShort={project.descriptionShort}
          sourceUrl={project.sourceUrl}
          relatedUrl={project.relatedUrl} />
      );
    });

    return (
      <div class="l-container narrow">
        <div className="section-projects">
          {projects}
        </div>
      </div>
    );
  }
}

export default Projects;
