import React from 'react';
import styles from './Profile.module.scss';

export const Profile = () => (
  <div className={styles.container}>
    <div className={styles.heading}>
      <h1 className={styles.name}>Daisuke Tsuji</h1>
      <div className={styles.description}></div>
    </div>
  </div>
);
