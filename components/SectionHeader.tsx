import React from 'react';
import { Container } from 'components/Container';
import styles from './SectionHeader.module.scss';

interface Props {
  title: string
}
export const SectionHeader: React.VFC<Props> = ({ title }) => (
  <header className={styles.container}>
    <Container>
      <h2 className={styles.title}>{title}</h2>
    </Container>
  </header>
);
