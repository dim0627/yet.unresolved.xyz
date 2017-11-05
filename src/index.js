import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {Helmet} from "react-helmet";

import registerServiceWorker from './registerServiceWorker';

import Frontmatters from './frontmatters';
import './styles.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './Home';
import Projects from './Projects';
import NoMatch from './NoMatch';

ReactDOM.render(
  <Router>
    <div>
      <Helmet>
        <title>Portfolio - Daisuke Tsuji</title>
        <link rel="canonical" href={Frontmatters.base_url} />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
