import React from 'react';
import './PageHeader.css';

const PageHeader = () => (
  <h2 className={`page-header ${this.props.additionalClass}`}>{this.props.title}</h2>
);

export default PageHeader;
