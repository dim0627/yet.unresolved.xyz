import React from 'react'
import styled from "styled-components"
import Container from './container'

const Hero = styled.div`
  padding: 8rem 0;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 4rem;

  @media (max-width: 767px) {
    font-size: 2rem;
    line-height: 2.75rem;
  }
`

export default () => (
  <Hero>
    <Container>
      <Title>
        Unresolved today,<br />Solve in tomorrow.
      </Title>
    </Container>
  </Hero>
)
