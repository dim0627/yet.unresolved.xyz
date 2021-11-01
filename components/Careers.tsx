import React from 'react';
import { Container } from 'components/Container';
import { SectionHeader } from 'components/SectionHeader';
import { Career } from 'components/Career';

interface Props {
  careers: Career[]
}

export const Careers: React.VFC<Props> = ({ careers }) => (
  <>
    <SectionHeader title="Careers" />
    <Container>
      {careers.map((career) => <Career key={career.id} career={career} />)}
    </Container>
  </>
);
