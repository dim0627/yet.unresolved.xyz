import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import './styles.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './Home';
import Projects from './Projects';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
