import React from 'react'
import styled from "styled-components"
import Section from '../components/Section'
import Frontmatters from '../frontmatters'

const WorkCard = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: .25rem;
    bottom: .25rem;
    left: 0;
    width: .25rem;
    border: 2px solid #333;
    border-right: 0;
  }
`

const Details = styled.div`
  margin: 1.5rem 0;
  padding-left: 1rem;
`

const WrokingDate = styled.div`
`

const Role = styled.div`
  margin-bottom: .5rem;
`

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5rem;
`

const Stack = styled.ul`
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

const Work = (props) => (
  <WorkCard>
    {<WrokingDate>{props.workingTo ? props.workingTo.toDateString() : "Now"}</WrokingDate>}
    <Details>
      <Role>{props.role}</Role>
      <Title>{props.title}</Title>
      <Stack>
        {props.stack.map((k, i) => <li key={i}>{k}</li>)}
      </Stack>
    </Details>
    <WrokingDate>
      {props.workingFrom.toDateString()}
    </WrokingDate>
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
