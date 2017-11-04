import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import './styles.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './Home';
import Projects from './Projects';
import NoMatch from './NoMatch';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route component={NoMatch}/>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
