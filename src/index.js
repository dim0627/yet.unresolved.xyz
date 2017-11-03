import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Section from './components/Section';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
  <Header />
  <Hero />
  <Section />
  <Footer />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
