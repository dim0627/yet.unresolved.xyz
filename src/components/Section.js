import React from 'react';
import PropTypes from 'prop-types';

import './Section.css';
import PageHeader from './PageHeader';

const Section = ({sectionId, sectionTitle, children}) => (
  <section id={sectionId} name={sectionId} className="general-section">
    <div className="l-container">

      <div className="panes">
        <div className="pane">
          <PageHeader title={sectionTitle} />
        </div>

        <div className="pane">
          {children}
        </div>
      </div>

    </div>
  </section>
);

Section.propTypes = {
  sectionId: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
