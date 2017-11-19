import React from 'react';
import PropTypes from 'prop-types';

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

DefinitionList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default DefinitionList;
