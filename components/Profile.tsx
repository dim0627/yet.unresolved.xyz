import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container } from './Container';
import styles from './Profile.module.scss';

interface IProp {
  profile: Profile
}

export const Profile = ({ profile }: IProp) => (
  <Container>
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.name}>{profile.fullName}</h1>
        <div className={styles.description}>{profile.description}</div>
        <div className={styles.details}>
          <ReactMarkdown source={profile.details} escapeHtml={false} />
        </div>
      </div>
    </div>
  </Container>
);
