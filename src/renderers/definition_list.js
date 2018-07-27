import React from 'react'

export default ({title, children}) => (
  <dl>
    <dt>{title}</dt>
    <dd>
      {children}
    </dd>
  </dl>
)
