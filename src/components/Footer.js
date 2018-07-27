import React from 'react';
import { Github, Facebook, Twitter, Linkedin, Mail } from 'react-feather';
import styled from "styled-components"
import Container from './Container'
import Frontmatters from '../frontmatters';

const Footer = styled.footer`
  padding: 1.5rem 0;
`

const Copy = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5rem;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`

const Social = styled.div`
  position: absolute;
  top: 0;
  right: 1.5rem;

  @media screen and (max-width: 767px) {
    position: static;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`

const SocialItem = styled.a`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 1rem;
  text-align: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export default () => (
  <Footer>
    <Container>
      <Social>
        <SocialItem href={Frontmatters.author.social.github} target="_blank" rel="nofollow"><Github /></SocialItem>
        <SocialItem href={Frontmatters.author.social.twitter} target="_blank" rel="nofollow"><Twitter /></SocialItem>
        <SocialItem href={Frontmatters.author.social.facebook} target="_blank" rel="nofollow"><Facebook /></SocialItem>
        <SocialItem href={Frontmatters.author.social.linkedin} target="_blank" rel="nofollow"><Linkedin /></SocialItem>
        <SocialItem href={`mailto:${Frontmatters.author.email}`}><Mail /></SocialItem>
      </Social>
      <Copy>&copy; {Frontmatters.siteName}</Copy>
    </Container>
  </Footer>
)
