import React from 'react'
import styled from "styled-components"
import PageHeader from './PageHeader';
import Section from '../components/Section'
import Frontmatters from '../frontmatters'

const WorkCard = styled.div`
`

const Work = (props) => (
  <WorkCard>
    {<div className="date">{props.workingTo ? props.workingTo.toDateString() : "Now"}</div>}
    <div className="details">
      <div className="role">{props.role}</div>
      <h3 className="title">{props.title}</h3>
      <div className="stack">
        {props.stack.map((k, i) => <li key={i}>{k}</li>)}
      </div>
    </div>
    <div className="date">
      {props.workingFrom.toDateString()}
    </div>
  </WorkCard>
)

const WorksContainer = styled.div`
`

export default () => (
  <Section sectionId='works' sectionTitle='Works'>
    <WorksContainer>
      {Frontmatters.works.map((k, i) => <Work key={i} {...k} />)}
    </WorksContainer>
  </Section>
)
