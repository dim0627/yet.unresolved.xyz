import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Helmet} from "react-helmet";

import registerServiceWorker from './registerServiceWorker';

import Frontmatters from './frontmatters';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './containers/Home';
// import Projects from './containers/Projects';
// import NameCard from './containers/NameCard';

ReactDOM.render(
  <div>
    <Helmet>
      <title>Portfolio - Daisuke Tsuji</title>
      <link rel="canonical" href={Frontmatters.baseUrl} />
    </Helmet>
    <Header />
    <Footer />
  </div>
  document.getElementById('root')
)

registerServiceWorker();


// <Route exact path="/" component={Home} />
// <Route path="/projects" component={Projects} />
// <Route path="/nameCard" component={NameCard} />
