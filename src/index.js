import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import './styles.css';
import Home from './Home';

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
