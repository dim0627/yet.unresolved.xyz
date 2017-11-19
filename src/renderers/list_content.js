import React from 'react';
import PropTypes from 'prop-types';

const ListContent = ({collection}) => (
  <ul>
    {collection.map((k, i) => <li key={i}>{k}</li>)}
  </ul>
);

ListContent.propTypes = {
  collection: PropTypes.array.isRequired,
};

export default ListContent;
