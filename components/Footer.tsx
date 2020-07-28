import React from 'react';
import { Container } from './Container';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.container}>
    <Container>
      © Unresolved
    </Container>
  </footer>
);
