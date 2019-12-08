import React from 'react'
import styled from "styled-components"
import Container from './container'
import Frontmatters from '../frontmatters'

const Header = styled.header`
  padding: 4rem 0;
`

const Logo = styled.a`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 3rem;
`

const Ops = styled.div`
  position: absolute;
  top: 0;
  right: 1.5rem;

  &::after {
    content: '';
    display: block;
    clear: both;
  }

  @media (max-width: 767px) {
    position: static;
    margin-top: 2rem;
  }
`

const OpsItem = styled.a`
  display: block;
  position: relative;
  margin-left: 1.5rem;
  padding: 0 1rem;
  float: left;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 3rem;

  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20%;
    height: 3px;
    transition-duration: .3s;
    background-color: #333;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    max-width: 6rem;
    margin: 0 0 0 auto;
    float: none;
  }
`
const links = [
  { href: '/#me', label: 'Me' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#works', label: 'Works' }
]

export default () => (
  <Header>
    <Container>
      <Logo href="/">{Frontmatters.siteName}</Logo>
      <Ops>
        {links.map(({ href, label }) => (
          <OpsItem key={label} href={href}>{label}</OpsItem>
        ))}
      </Ops>
    </Container>
  </Header>
)

