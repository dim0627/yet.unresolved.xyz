import React from 'react';

import ListContent from '../renderers/list_content';
import {Helmet} from "react-helmet";

import Frontmatters from '../frontmatters';
import PageHeader from '../components/PageHeader';

import './NameCard.css';

const NameCard = () => (
  <div className="l-container">
    <Helmet>
      <title>NameCard - Daisuke Tsuji</title>
      <link rel="canonical" href={`${Frontmatters.base_url}/nameCard`} />
    </Helmet>
    <PageHeader title="NameCard" additionalClass="page" />
    <section className="general-section">

      <div className="panes">
        <div className="pane">

          <div className="name-card front">
            <div className="body">
              <div className="roles">
                <ListContent collection={Frontmatters.author.roles} />
              </div>
              <h2 className="title">{Frontmatters.author.name}</h2>
            </div>
            <div className="aside">
              <div className="contact email"><i className="fa fa-envelope-o fa-fw" aria-hidden="true"></i> {Frontmatters.author.email}</div>
              <div className="contact phone-number"><i className="fa fa-phone fa-fw" aria-hidden="true"></i> {Frontmatters.author.phoneNumber}</div>
            </div>
          </div>

        </div>
        <div className="pane">

          <div className="name-card back">
            <div className="body">
              <div className="property gh">{Frontmatters.author.social.github_id}</div>
              <div className="property tw">{Frontmatters.author.social.twitter_id}</div>
              <div className="property fb">{Frontmatters.author.social.facebook_id}</div>
              <div className="property li">{Frontmatters.author.social.linkedin_id}</div>
              <div className="property mc">{Frontmatters.mainColor}</div>
              <div className="property bc">{Frontmatters.baseColor}</div>
            </div>
          </div>

        </div>
      </div>

    </section>
  </div>
);

export default NameCard;
