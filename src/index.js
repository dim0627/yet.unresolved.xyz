import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'font-awesome/css/font-awesome.css'
import {Helmet} from "react-helmet";

import registerServiceWorker from './registerServiceWorker';

import Frontmatters from './frontmatters';
import './styles.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './Home';
import Projects from './Projects';
import NoMatch from './NoMatch';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return this.props.children
  }
}

ReactDOM.render(
  <Router>
    <ScrollToTop>
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
    </ScrollToTop>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
