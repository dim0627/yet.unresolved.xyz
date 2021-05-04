import React from 'react';
import { GitHub, Link } from 'react-feather';
import ReactMarkdown from 'react-markdown';
import styles from './Project.module.scss';

interface IProps {
  project: Project
}

export const Project = ({ project }: IProps) => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <h3 className={styles.name}>{project.title}</h3>
      <div className={styles.description}>
        <ReactMarkdown>
          {project.description}
        </ReactMarkdown>
      </div>
      <ul className={styles.stacks}>
        {project.stacks.map((stack) => <li key={stack}>{stack}</li>)}
      </ul>
      { (project.href || project.repositoryUrl)
        && (
        <ul className={styles.refs}>
          {project.href
          && (
          <li className={styles.refsItem}>
            <a href={project.href} aria-label={project.title} className={styles.refsAnchor}>
              <Link size={20} />
            </a>
          </li>
          )}
          {project.repositoryUrl && (
          <li className={styles.refsItem}>
            <a href={project.repositoryUrl} rel="nofollow noreferrer" target="_blank" aria-label="repository url" className={styles.refsAnchor}>
              <GitHub size={20} />
            </a>
          </li>
          )}
        </ul>
        )}
    </div>
  </div>
);
