import React from 'react';
import styled from "styled-components"
import Container from './Container'
import PageHeader from './PageHeader';

const Section = styled.section`
  padding: 8rem 0;
`

const Panes = styled.div`
  display: flex;
  align-items: top;

  @media (max-width: 767px) {
    display: block;
  }
`

const Pane = styled.div`
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export default ({sectionId, sectionTitle, children}) => (
  <Section id={sectionId} name={sectionId}>
    <Container>
      <Panes>
        <Pane>
          <PageHeader title={sectionTitle} />
        </Pane>
        <Pane>
          {children}
        </Pane>
      </Panes>
    </Container>
  </Section>
)
