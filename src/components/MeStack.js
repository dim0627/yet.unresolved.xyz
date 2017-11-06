import React from 'react';

import Frontmatters from '../frontmatters';
import DefinitionList from '../renderers/definition_list';
import ListContent from '../renderers/list_content';
import './MeStack.css';

const calcAge = () => {
  const ageDate = new Date(Date.now() - Frontmatters.author.dob);
  return `${Frontmatters.author.dob.toDateString()} / Age ${Math.abs(ageDate.getUTCFullYear() - 1970)}`;
}

const MeStack = () => (
  <div className="section-me">
    <h3 className="title">{Frontmatters.author.name}</h3>
    <div className="role">
      <ListContent collection={Frontmatters.author.roles} />
    </div>
    <DefinitionList title="D.O.B / Age">
      {calcAge()}
    </DefinitionList>
    <DefinitionList title="Language">
      <ListContent collection={Frontmatters.author.languages} />
    </DefinitionList>
    <DefinitionList title="MainSkills">
      <ListContent collection={Frontmatters.author.mainSkills} />
    </DefinitionList>
    <DefinitionList title="SubSkills">
      <ListContent collection={Frontmatters.author.subSkills} />
    </DefinitionList>
    <DefinitionList title="Hiring">
      {Frontmatters.author.hiring}
    </DefinitionList>
  </div>
);

export default MeStack;
