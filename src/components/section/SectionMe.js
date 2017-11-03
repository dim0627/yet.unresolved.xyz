import React from 'react';
import Constants from '../../Constants';
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
    const ageDate = new Date(Date.now() - Constants.author.dob);
    return `${Constants.author.dob.toDateString()} / Age ${Math.abs(ageDate.getUTCFullYear() - 1970)}`;
  }

  renderBody() {
    return (
      <div className="section-me">
        <h3 className="title">{Constants.author.name}</h3>
        <div className="role">
          {listContent(Constants.author.roles)}
        </div>
        {this.renderDefinitionList("D.O.B / Age", this.renderDayOfBirth)}
        {this.renderDefinitionList("Language", () => listContent(Constants.author.languages))}
        {this.renderDefinitionList("MainSkills", () => listContent(Constants.author.mainSkills))}
        {this.renderDefinitionList("SubSkills", () => listContent(Constants.author.subSkills))}
        {this.renderDefinitionList("Hiring", () => Constants.author.hiring)}
      </div>
    );
  }
}

export default SectionMe;
