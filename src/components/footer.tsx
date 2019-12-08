import React from 'react';
import { GitHub, Facebook, Twitter, Linkedin, Mail } from 'react-feather';
import styled from "styled-components"
import Container from './container'
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

const contact: {
  [key: string]: string
} = {
  github: "https://github.com/dim0627",
  github_id: "dim0627",
  twitter: "https://twitter.com/dim0627",
  twitter_id: "dim0627",
  linkedin: "https://www.linkedin.com/in/daisuke-tsuji-2a379a118",
  linkedin_id: "daisuke-tsuji-2a379a118",
  facebook: "https://www.facebook.com/daisuke.tsuji.735",
  facebook_id: "daisuke.tsuji.735",
  email: 'dim0627@gmail.com',
}

export default () => (
  <Footer>
    <Container>
      <Social>
        <SocialItem href={contact.github} target="_blank" rel="nofollow"><GitHub /></SocialItem>
        <SocialItem href={contact.twitter} target="_blank" rel="nofollow"><Twitter /></SocialItem>
        <SocialItem href={contact.facebook} target="_blank" rel="nofollow"><Facebook /></SocialItem>
        <SocialItem href={contact.linkedin} target="_blank" rel="nofollow"><Linkedin /></SocialItem>
        <SocialItem href={`mailto:${contact.email}`}><Mail /></SocialItem>
      </Social>
      <Copy>&copy; {Frontmatters.siteName}</Copy>
    </Container>
  </Footer>
)
