import React from 'react';
import {
  Twitter, GitHub, Linkedin, Mail, Facebook,
} from 'react-feather';
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

        <ul className={styles.contacts}>
          {profile.twitterUrl
            && (
            <li className={styles.contactItem}>
              <a
                href={profile.twitterUrl}
                className={styles.contactAnchor}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Twitter size={20} />
              </a>
            </li>
            )}
          {profile.gitHubUrl
            && (
            <li className={styles.contactItem}>
              <a
                href={profile.gitHubUrl}
                className={styles.contactAnchor}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <GitHub size={20} />
              </a>
            </li>
            )}
          {profile.linkedInUrl
            && (
            <li className={styles.contactItem}>
              <a
                href={profile.linkedInUrl}
                className={styles.contactAnchor}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
            </li>
            )}
          {profile.facebookUrl
            && (
            <li className={styles.contactItem}>
              <a
                href={profile.facebookUrl}
                className={styles.contactAnchor}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Facebook size={20} />
              </a>
            </li>
            )}
          {profile.emailAddress
            && (
            <li className={styles.contactItem}>
              <a
                href={`mailto:${profile.emailAddress}`}
                className={styles.contactAnchor}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Mail size={20} />
              </a>
            </li>
            )}
        </ul>

        <div className={styles.details}>
          <ReactMarkdown source={profile.details} escapeHtml={false} />
        </div>
      </div>
    </div>
  </Container>
);
