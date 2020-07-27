import React from 'react';
import { Container } from 'components/Container';
import { SectionHeader } from 'components/SectionHeader';
import { Project } from 'components/Project';
import styles from './Projects.module.scss';

interface IProjectsProp {
  projects: Project[]
}

export const Projects = ({ projects }: IProjectsProp) => (
  <>
    <SectionHeader title="Projects" />
    <Container>
      <div className={styles.container}>
        <div className={styles.stack}>
          {projects.map((project) => <Project key={project.title} project={project} />)}
        </div>
      </div>
    </Container>
  </>
);
