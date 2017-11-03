import React from 'react';
import Frontmatters from '../../frontmatters';
import listContent from '../../renderers/list_content';
import Section from './Section';
import './SectionMe.css';

export class SectionMe extends Section {
  constructor(props) {
    super(props);
    this.state = {
      sectionId: "me",
      title: "Me",
    };
  }

  renderDefinitionList(title, callback) {
    return(
      <dl>
        <dt>{title}</dt>
        <dd>
          {callback()}
        </dd>
      </dl>
    );
  }

  renderDayOfBirth() {
    const ageDate = new Date(Date.now() - Frontmatters.author.dob);
    return `${Frontmatters.author.dob.toDateString()} / Age ${Math.abs(ageDate.getUTCFullYear() - 1970)}`;
  }

  renderBody() {
    return (
      <div className="section-me">
        <h3 className="title">{Frontmatters.author.name}</h3>
        <div className="role">
          {listContent(Frontmatters.author.roles)}
        </div>
        {this.renderDefinitionList("D.O.B / Age", this.renderDayOfBirth)}
        {this.renderDefinitionList("Language", () => listContent(Frontmatters.author.languages))}
        {this.renderDefinitionList("MainSkills", () => listContent(Frontmatters.author.mainSkills))}
        {this.renderDefinitionList("SubSkills", () => listContent(Frontmatters.author.subSkills))}
        {this.renderDefinitionList("Hiring", () => Frontmatters.author.hiring)}
      </div>
    );
  }
}

export default SectionMe;
