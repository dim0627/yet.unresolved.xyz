import React from 'react';

import {Helmet} from "react-helmet";

import Frontmatters from '../frontmatters';
import Project from '../components/Project';
import PageHeader from '../components/PageHeader';

const Projects = () => (
  <div className="l-container narrow">
    <Helmet>
      <title>Projects - Daisuke Tsuji</title>
      <link rel="canonical" href={`${Frontmatters.base_url}/projects`} />
    </Helmet>

    <PageHeader title="Projects" additionalClass="page" />

    <div>
      {Frontmatters.projects.map((p, i) => <Project key={i} {...p} />)}
    </div>
  </div>
);

export default Projects;
