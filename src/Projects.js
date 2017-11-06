import React from 'react';

import {Helmet} from "react-helmet";

import Frontmatters from './frontmatters';
import ProjectPanel from './components/ProjectPanel';
import PageHeader from './components/PageHeader';

const Projects = () => (
  <div className="l-container narrow">
    <Helmet>
      <title>Projects - Daisuke Tsuji</title>
      <link rel="canonical" href={`${Frontmatters.base_url}/projects`} />
    </Helmet>
    <PageHeader title="Projects" additionalClass="page" />
    <div className="section-projects">
      {Frontmatters.projects.map((p, i) => <ProjectPanel key={i} {...p} />)}
    </div>
  </div>
);

export default Projects;
