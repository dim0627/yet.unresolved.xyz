import React from 'react';
import { Container } from 'components/Container';
import styles from './SectionHeader.module.scss';

interface IProps {
  title: string
}
export const SectionHeader = ({ title }) => (
  <header className={styles.container}>
    <Container>
      <h2 className={styles.title}>{title}</h2>
    </Container>
  </header>
);
