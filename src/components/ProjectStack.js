import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Frontmatters from '../frontmatters';
import './ProjectStack.css';
import Project from './Project';

class ProjectStack extends Component {
  render() {
    const projects = Frontmatters.projects.filter((p) => p.index).map((project) => {
      return (
        <Project title={project.title}
          descriptionShort={project.descriptionShort}
          sourceUrl={project.sourceUrl}
          relatedUrl={project.relatedUrl} />
      );
    });

    return (
      <div>
        <div className="section-projects">
          {projects}
        </div>
        <div className="readmore">
          <Link to="/projects">See All Projects</Link>
        </div>
      </div>
    );
  }
}

export default ProjectStack;
