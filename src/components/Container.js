import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export default const ({children}) => (
  <Container>
    {children}
  </Container>
)
