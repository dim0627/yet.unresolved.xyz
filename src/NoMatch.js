import React from 'react';

import {Helmet} from "react-helmet";

import PageHeader from './components/PageHeader';

const NoMatch = () => (
  <div>
    <Helmet>
      <title>404 Page Not Found - Daisuke Tsuji</title>
      <meta name="robots" content="noindex,nofollow" />
    </Helmet>
    <div className="l-container narrow error">
      <PageHeader title="404" />
    </div>
  </div>
);

export default NoMatch;
