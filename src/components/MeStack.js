import React, { Component } from 'react';

import Frontmatters from '../frontmatters';
import listContent from '../renderers/list_content';
import './MeStack.css';

function renderDefinitionList(title, body) {
  return(
    <dl>
      <dt>{title}</dt>
      <dd>
        {body}
      </dd>
    </dl>
  );
}

class MeStack extends Component {
  render() {
    // Day of Birth
    const ageDate = new Date(Date.now() - Frontmatters.author.dob);
    const dayOfBirth = `${Frontmatters.author.dob.toDateString()} / Age ${Math.abs(ageDate.getUTCFullYear() - 1970)}`;

    return (
      <div className="section-me">
        <h3 className="title">{Frontmatters.author.name}</h3>
        <div className="role">
          {listContent(Frontmatters.author.roles)}
        </div>
        {renderDefinitionList("D.O.B / Age", dayOfBirth)}
        {renderDefinitionList("Language", listContent(Frontmatters.author.languages))}
        {renderDefinitionList("MainSkills", listContent(Frontmatters.author.mainSkills))}
        {renderDefinitionList("SubSkills", listContent(Frontmatters.author.subSkills))}
        {renderDefinitionList("Hiring", Frontmatters.author.hiring)}
      </div>
    );
  }
}

export default MeStack;
