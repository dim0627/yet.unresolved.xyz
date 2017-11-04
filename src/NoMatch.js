import React, { Component } from 'react';

import PageHeader from './components/PageHeader';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <div class="l-container narrow">
          <PageHeader title="404" />
        </div>
      </div>
    );
  }
}

export default NoMatch;
