import React from 'react';
import { Link } from 'react-router-dom'

import Frontmatters from '../frontmatters';
import Project from './Project';

const ProjectStack = () => (
  <div>
    <div className="section-projects">
      {Frontmatters.projects.filter((p) => p.index).map((p, i) =>
        <Project key={i} {...p} />
      )}
    </div>
    <div className="readmore">
      <Link to="/projects">See All Projects</Link>
    </div>
  </div>
);

export default ProjectStack;
