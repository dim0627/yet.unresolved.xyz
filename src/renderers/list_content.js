import React from 'react';

const ListContent = (collection) => (
  <ul>
    {collection.map((k, i) => <li key={i}>{k}</li>)}
  </ul>
);

export default ListContent;
