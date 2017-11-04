import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.css';
import './index.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Hero from './components/hero/Hero';
import SectionMe from './components/section/SectionMe';
import SectionProjects from './components/section/SectionProjects';
import SectionWorks from './components/section/SectionWorks';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Header />
    <Hero />
    <SectionMe />
    <SectionProjects />
    <SectionWorks />
    <Footer />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
