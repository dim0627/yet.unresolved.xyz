import React from 'react';
import { ArrowRight } from 'react-feather';
import styles from './Career.module.scss';

interface IProps {
  career: Career
}

export const Career = ({ career }: IProps) => (
  <div className={styles.container}>
    <div className={styles.duration}>
      {career.joinedAt}
      <ArrowRight size={20} className={styles.arrow} />
      {career.leavedAt || 'Now'}
    </div>
    <ul className={styles.roles}>
      {career.roles.map((role) => <li key={role} className={styles.listItem}>{role}</li>)}
    </ul>
    <h3 className={styles.companyName}>{career.companyName}</h3>
    <ul className={styles.stacks}>
      {career.stacks.map((stack) => <li key={stack} className={styles.listItem}>{stack}</li>)}
    </ul>
  </div>
);
