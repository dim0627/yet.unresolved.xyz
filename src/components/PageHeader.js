import React from 'react';
import './PageHeader.css';

const PageHeader = ({title, additionalClass}) => (
  <h2 className={`page-header ${additionalClass}`}>{title}</h2>
);

export default PageHeader;
