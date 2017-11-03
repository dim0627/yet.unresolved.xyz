import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './index.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Hero from './components/hero/Hero';
import SectionMe from './components/section/SectionMe';
import SectionProjects from './components/section/SectionProjects';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Header />
    <Hero />
    <SectionMe />
    <SectionProjects />
    <Footer />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
