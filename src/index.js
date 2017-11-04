import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.css';
import './index.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Section from './components/Section';
import Hero from './components/Hero';
import Me from './components/Me';
import Projects from './components/Projects';
import Works from './components/Works';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <Header />
    <Hero />
    <Section sectionId="me" sectionTitle="Me">
      <Me />
    </Section>
    <Section sectionId="projects" sectionTitle="Projects">
      <Projects />
    </Section>
    <Section sectionId="works" sectionTitle="Works">
      <Works />
    </Section>
    <Footer />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
