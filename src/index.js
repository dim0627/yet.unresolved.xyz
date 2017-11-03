import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <Header />
  <Hero />
  <Footer />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
