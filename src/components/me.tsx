import React from 'react'
import styled from "styled-components"
import Section from '../components/section'

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
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.5rem;
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

    &::after {
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

const author: {
  [key: string]: any
} = {
  name: "Daisuke Tsuji",
  phoneNumber: "090-5991-6692",
  dob: new Date(1989, 1, 26),
  roles: ["Web Developer", "SEO Analyst", ],
  languages: ["Japanese", "English(Learning)", ],
  mainSkills: ["Ruby", "Ruby on Rails", "ES6", "SEO", ],
  subSkills: ["Golang", "Python", "PHP", "Elasticsearch", "Design", "Writing", ],
  hiring: (
  <div>
    <p>Welcome :)</p>
    <p>I&apos;m looking for developer positions in startups in English speaking countries.</p>
  </div>
  )
}

interface IMeProps { }
interface IMeState {
  age?: string;
}

export default class extends React.Component<IMeProps, IMeState> {
  constructor(props: IMeProps) {
    super(props)

    const ageDate: Date = new Date(Date.now() - author.dob)
    this.state = {
      age: `${author.dob.toDateString()} / Age ${Math.abs(ageDate.getUTCFullYear() - 1970)}`
    }
  }

  render() {
    return (
      <Section sectionId='me' sectionTitle='Me'>
        <Title>{author.name}</Title>
        <Role>
          <List>
            {author.roles.map((k, i) => <li key={i}>{k}</li>)}
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
              {author.languages.map((k, i) => <li key={i}>{k}</li>)}
            </List>
          </dd>
        </DefinitionList>
        <DefinitionList>
          <dt>MainSkills</dt>
          <dd>
            <List>
              {author.mainSkills.map((k, i) => <li key={i}>{k}</li>)}
            </List>
          </dd>
        </DefinitionList>
        <DefinitionList>
          <dt>SubSkills</dt>
          <dd>
            <List>
              {author.subSkills.map((k, i) => <li key={i}>{k}</li>)}
            </List>
          </dd>
        </DefinitionList>
        <DefinitionList>
          <dt>Hiring</dt>
          <dd>
            <Paragraph>
              {author.hiring}
            </Paragraph>
          </dd>
        </DefinitionList>
      </Section>
    )
  }
}
