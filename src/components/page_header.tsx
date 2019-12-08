import React from 'react'
import styled from "styled-components"

const PageHeader = styled.h2`
  position: relative;
  margin-top: 3rem;
  padding: 0 .5rem 0 4rem;
  font-size: 3rem;
  line-height: 4rem;

  @media (max-width: 767px) {
    margin: 0 0 3rem;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -3rem;
    bottom: -2rem;
    left: 1rem;
    width: 5px;
    transform: perspective(200px) rotateX(-45deg) rotate(-10deg);
    background-color: #333;
  }
`

export default ({title}) => (
  <PageHeader>{title}</PageHeader>
)
