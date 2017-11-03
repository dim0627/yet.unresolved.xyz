import React, { Component } from 'react';
import Constants from '../../Constants';
import Section from './Section';
import './SectionMe.css';

export class SectionMe extends Section {
  constructor(props) {
    super(props);
    this.state = {
      title: "Me",
      skills: Constants.author.skills,
    };
  }

  renderCollection(skillName, i) {
    return(
      <li key={i}>{skillName}</li>
    );
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

  renderListItems(collection) {
    const listItems = collection.map((k, i) => {
      return <li key={i}>{k}</li>
    });

    return(
      <ul>
        {listItems}
      </ul>
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
          {this.renderListItems(Constants.author.roles)}
        </div>
        {this.renderDefinitionList("D.O.B / Age", this.renderDayOfBirth)}
        {this.renderDefinitionList("Language", () => this.renderListItems(Constants.author.languages))}
        {this.renderDefinitionList("MainSkills", () => this.renderListItems(Constants.author.mainSkills))}
        {this.renderDefinitionList("SubSkills", () => this.renderListItems(Constants.author.subSkills))}
        {this.renderDefinitionList("Hiring", () => Constants.author.hiring)}
      </div>
    );
  }
}

export default SectionMe;
