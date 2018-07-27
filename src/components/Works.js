import React from 'react'
import styled from "styled-components"
import Container from './Container'
import PageHeader from './PageHeader';
import Section from '../components/Section'
import Frontmatters from '../frontmatters'

const Work = (props) => (
  <Section sectionId='works' sectionTitle='Works'>
    {<div className="date">{props.workingTo ? props.workingTo.toDateString() : "Now"}</div>}
    <div className="details">
      <div className="role">{props.role}</div>
      <h3 className="title">{props.title}</h3>
      <div className="stack">
        {props.stack.map((k, i) => <li key={i}>{k}</li>)}
      </div>
    </div>
  <div className="date">{props.workingFrom.toDateString()}</div>
  </Section>
)

const WorksContainer = styled.div`
`

export default () => (
  <Container>
    <PageHeader title='Projects' />
    <WorksContainer>
      {Frontmatters.works.map((k, i) => <Work key={i} {...k} />)}
    </WorksContainer>
  </Container>
)
