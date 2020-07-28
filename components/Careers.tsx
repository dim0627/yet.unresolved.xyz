import React from 'react';
import { Container } from 'components/Container';
import { SectionHeader } from 'components/SectionHeader';
import { Career } from 'components/Career';

interface IProp {
  careers: Career[]
}

export const Careers = ({ careers }: IProp) => (
  <>
    <SectionHeader title="Careers" />
    <Container>
      {careers.map((career) => <Career key={career.id} career={career} />)}
    </Container>
  </>
);
