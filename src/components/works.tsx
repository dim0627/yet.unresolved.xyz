import React from 'react'
import styled from "styled-components"
import Section from '../components/section'

const WorkCard = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    top: .25rem;
    bottom: .25rem;
    left: 0;
    width: .5rem;
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
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
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

const works = [
  {
    title: "Lang-8 inc.",
    workingFrom: new Date(2018, 10, 1),
    role: "Web Developer",
    stack: ["Ruby", "Rails 4.x.x", "Elasticsearch", "i18n"],
  },
  {
    title: "DMM.com LLC(Freelance)",
    workingFrom: new Date(2018, 9, 1),
    workingTo: new Date(2018, 12, 31),
    role: "Web Developer",
    stack: ["Ruby", "Rails 5.x.x", "Elasticsearch", "ES6"],
  },
  {
    title: "Pharma Information Network, inc.(Freelance)",
    workingFrom: new Date(2018, 8, 1),
    role: "Chief Developer",
    stack: ["Ruby", "Rails 5.x.x", "ES6"],
  },
  {
    title: "Fitsplus, inc.(Freelance)",
    workingFrom: new Date(2017, 11, 1),
    workingTo: new Date(2019, 9, 1),
    role: "Web Developer, Project Manager",
    stack: ["Ruby", "Rails 5.x.x", "ES6", "AWS"],
  },
  {
    title: "Rista, inc.",
    workingFrom: new Date(2016, 10, 1),
    workingTo: new Date(2017, 11, 1),
    role: "Web Developer, SEO Analyist",
    stack: ["Ruby", "Rails 5.x.x", "ES6", "MySQL", "Elasticsearch"],
  },
  {
    title: "Pharma Information Network, inc.",
    workingFrom: new Date(2015, 8, 1),
    workingTo: new Date(2016, 10, 1),
    role: "Lead Developer, SEO Analyist",
    stack: ["PHP", "Laravel", "Python", "Golang", "Ruby", "Rails 4.x.x", "Elasticsearch"],
  },
  {
    title: "MedPeer, inc.",
    workingFrom: new Date(2015, 1, 1),
    workingTo: new Date(2015, 8, 1),
    role: "Web Developer",
    stack: ["PHP", "Laravel", "MySQL", "AWS CloudSearch"],
  },
  {
    title: "Kakaku.com, inc.",
    workingFrom: new Date(2014, 6, 1),
    workingTo: new Date(2015, 0, 1),
    role: "Web Developer",
    stack: ["C#", "VB Script", "SQL Server"],
  },
]

export default () => (
  <Section sectionId='works' sectionTitle='Works'>
    <WorksContainer>
      {works.map((k, i) => <Work key={i} {...k} />)}
    </WorksContainer>
  </Section>
)
