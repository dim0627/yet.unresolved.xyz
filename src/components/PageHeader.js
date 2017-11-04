import React, { Component } from 'react';
import './PageHeader.css';

class PageHeader extends Component {
  render() {
    return (
      <h2 className={`page-header ${this.props.additionalClass}`}>{this.props.title}</h2>
    );
  }
}

export default PageHeader;
