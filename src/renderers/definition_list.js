import React from 'react';

const DefinitionList = ({title, children}) => {
  return(
    <dl>
      <dt>{title}</dt>
      <dd>
        {children}
      </dd>
    </dl>
  );
}

export default DefinitionList;
