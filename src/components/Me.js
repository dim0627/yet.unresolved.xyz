import React from 'react'
import styled from "styled-components"
import Frontmatters from '../frontmatters'
import Section from '../components/Section'

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.25rem;
`

const Role = styled.div`
  margin-bottom: 3rem;
`

const DefinitionList = styled.dl`
  margin: 1.5rem 0;

  dt {
    font-weight: 700;
  }

  dd {
    margin: .5rem 0 0;
    padding-left: 2rem;
  }
`

const List = styled.ul`
  li {
    display: inline;
    line-height: 1.5rem;

    &:after {
      content: ', ';
    }

    &:last-child::after {
      content: '';
    }
  }
`

const Paragraph = styled.div`
  p {
    margin: .5rem 0;
    line-height: 1.25rem;
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)

    const ageDate = new Date(Date.now() - Frontmatters.author.dob)
    this.state = {
      age: `${Frontmatters.author.dob.toDateString()} / Age ${Math.abs(ageDate.getUTCFullYear() - 1970)}`
    }
  }

  render() {
    return (
      <Section sectionId='me' sectionTitle='Me'>
        <Title>{Frontmatters.author.name}</Title>
        <Role>
          <List>
            {Frontmatters.author.roles.map((k, i) => <li key={i}>{k}</li>)}
          </List>
        </Role>
        <DefinitionList>
          <dt>D.O.B / Age</dt>
          <dd>{this.state.age}</dd>
        </DefinitionList>
        <DefinitionList>
          <dt>Language</dt>
          <dd>
            <List>
              {Frontmatters.author.languages.map((k, i) => <li key={i}>{k}</li>)}
            </List>
          </dd>
        </DefinitionList>
        <DefinitionList>
          <dt>MainSkills</dt>
          <dd>
            <List>
              {Frontmatters.author.mainSkills.map((k, i) => <li key={i}>{k}</li>)}
            </List>
          </dd>
        </DefinitionList>
        <DefinitionList>
          <dt>SubSkills</dt>
          <dd>
            <List>
              {Frontmatters.author.subSkills.map((k, i) => <li key={i}>{k}</li>)}
            </List>
          </dd>
        </DefinitionList>
        <DefinitionList>
          <dt>Hiring</dt>
          <dd>
            <Paragraph>
              {Frontmatters.author.hiring}
            </Paragraph>
          </dd>
        </DefinitionList>
      </Section>
    )
  }
}
