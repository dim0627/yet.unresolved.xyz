import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <Header />
  <Footer />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
