import React from 'react'
import { GitHub, Link } from 'react-feather';
import styled from "styled-components"
import Container from './container'
import PageHeader from './page_header';

const ProjectCard = styled.div`
  box-sizing: border-box;
  width: 33.3333333%;
  margin-bottom: 3rem;
  padding: 0 1.5rem;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`

const Inner = styled.div`
  height: 18rem;
  padding: 3rem 1.5rem;
  border-radius: 14px;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, .08);

  @media screen and (max-width: 767px) {
    height: initial;
  }
`

const Title = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
`

const Stack = styled.ul`
  margin-bottom: 1.5rem;

  li {
    display: inline;
    line-height: 1.5rem;

    &::after {
      content: ', ';
    }

    &:last-child::after {
      content: '';
    }
  }
`

const Description = styled.div`
  p {
    margin: .25rem 0;
    line-height: 1.25rem;
  }
`

const Aside = styled.div`
  margin-top: 2rem;
`

const AsideItem = styled.a`
  display: inline-block;
  margin-right: 1.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: .5rem;
  }
`

const projects = [
  {
    title: "nutry.co",
    descriptionShort: (
      <div>
        <p>nutry is trouble consultation service for managed dieticians.</p>
      </div>
    ),
    stack: ["Rails 5.x.x", "webpacker", "cssnext", "ES6"],
    relatedUrl: "https://nutry.co/",
  },
  {
    title: "blog.unresolved.xyz",
    descriptionShort: (
      <div>
        <p>Tech blog.</p>
      </div>
    ),
    stack: ["GatsbyJS", "Contentful", "Netlify", "Server Side Rendering"],
    sourceUrl: "https://github.com/dim0627/blog.unresolved.xyz",
    relatedUrl: "https://blog.unresolved.xyz/",
  },
  {
    title: "yet.unresolved.xyz",
    descriptionShort: (
      <div>
        <p>It is about this page you are looking at.</p>
      </div>
    ),
    stack: ["React"],
    sourceUrl: "https://github.com/dim0627/portfolio",
    relatedUrl: "https://yet.unresolved.xyz",
  },
  {
    title: "TIL(Today I Learned)",
    descriptionShort: (
      <div>
        <p>Memo repositoriy a.k.a. TIL.</p>
      </div>
    ),
    stack: ["GitHub", "Markdown"],
    relatedUrl: "https://github.com/dim0627/til",
  },
  {
    title: "NikuPeer(EOL)",
    descriptionShort: (
      <div>
        <p>Web service for plan and join meat party.</p>
        <p>Support Event structured data for Google rich snippet.</p>
      </div>
    ),
    stack: ["Rails 5.x.x", "webpacker", "cssnext", "ES6", "AMP"],
  },
  {
    title: "RECR(EOL)",
    descriptionShort: (
      <div>
        <p>Part-time job listing service for not large organizations such as personal store.</p>
        <p>Support JobPosting structured data for Google for Jobs.</p>
      </div>
    ),
    stack: ["Rails 5.x.x", "webpacker", "cssnext", "ES6", "AMP"],
  },
]

const Project = (props) => (
  <ProjectCard>
    <Inner>
      <Title>{props.title}</Title>
      <Stack>
        {props.stack.map((k, i) => <li key={i}>{k}</li>)}
      </Stack>
      <Description>{props.descriptionShort}</Description>
      {
        (props.sourceUrl || props.relatedUrl) &&
          <Aside>
            {props.sourceUrl &&
                <AsideItem href={props.sourceUrl} target="_blank" rel="nofollow">
                  <GitHub />GitHub
                </AsideItem>
            }
            {props.relatedUrl &&
                <AsideItem href={props.relatedUrl} target="_blank">
                  <Link />Link
                </AsideItem>
            }
          </Aside>
      }
    </Inner>
  </ProjectCard>
)

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 6rem -1.5rem 3rem;
`

export default () => (
  <div id='projects'>
    <Container>
      <PageHeader title='Projects' />
      <ProjectsContainer>
        {projects.map((k, i) => <Project key={i} {...k} />)}
      </ProjectsContainer>
    </Container>
  </div>
)
