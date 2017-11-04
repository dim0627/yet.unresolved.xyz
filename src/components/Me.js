import React, { Component } from 'react';
import Frontmatters from '../frontmatters';
import listContent from '../renderers/list_content';
import './Me.css';

function renderDefinitionList(title, callback) {
  return(
    <dl>
      <dt>{title}</dt>
      <dd>
        {callback()}
      </dd>
    </dl>
  );
}

function renderDayOfBirth() {
  const ageDate = new Date(Date.now() - Frontmatters.author.dob);
  return `${Frontmatters.author.dob.toDateString()} / Age ${Math.abs(ageDate.getUTCFullYear() - 1970)}`;
}

class Me extends Component {
  render() {
    return (
      <div className="section-me">
        <h3 className="title">{Frontmatters.author.name}</h3>
        <div className="role">
          {listContent(Frontmatters.author.roles)}
        </div>
        {renderDefinitionList("D.O.B / Age", renderDayOfBirth)}
        {renderDefinitionList("Language", () => listContent(Frontmatters.author.languages))}
        {renderDefinitionList("MainSkills", () => listContent(Frontmatters.author.mainSkills))}
        {renderDefinitionList("SubSkills", () => listContent(Frontmatters.author.subSkills))}
        {renderDefinitionList("Hiring", () => Frontmatters.author.hiring)}
      </div>
    );
  }
}

export default Me;
