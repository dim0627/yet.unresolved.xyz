import React from 'react';

function listContent(collection) {
  const listItems = collection.map((k, i) => {
    return <li>{k}</li>
  });

  return(
    <ul>
      {listItems}
    </ul>
  );
}

export default listContent;
