import React from 'react';
import styled from "styled-components"
import Container from './Container'
import Frontmatters from '../frontmatters';

const Footer = styled.footer`
  padding: 1.5rem 0;
`

const Copy = styled.div`
  font-weight: 700;
  line-height: 2rem;
`

const Social = styled.div`
  position: absolute;
  top: 0;
  right: 1.5rem;
`

const SocialItem = styled.a`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  font-size: 1.2rem;
  line-height: 2rem;
  text-align: center;
`

export default () => (
  <Footer>
    <Container>
      <Copy>&copy; {Frontmatters.site_name}</Copy>
      <Social>
        <SocialItem href={Frontmatters.author.social.github} target="_blank" rel="nofollow"><i className="fa fa-github fa-fw" aria-hidden="true"></i></SocialItem>
        <SocialItem href={Frontmatters.author.social.twitter} target="_blank" rel="nofollow"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></SocialItem>
        <SocialItem href={Frontmatters.author.social.facebook} target="_blank" rel="nofollow"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></SocialItem>
        <SocialItem href={Frontmatters.author.social.linkedin} target="_blank" rel="nofollow"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></SocialItem>
        <SocialItem href={`mailto:${Frontmatters.author.email}`}><i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i></SocialItem>
      </Social>
    </Container>
  </Footer>
)
