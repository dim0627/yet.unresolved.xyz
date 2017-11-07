import React from 'react';
import Section from '../components/Section';
import Hero from '../components/Hero';
import MeStack from '../components/MeStack';
import ProjectStack from '../components/ProjectStack';
import WorkStack from '../components/WorkStack';

const Home = () => (
  <div>
    <Hero />
    <Section sectionId="me" sectionTitle="Me">
      <MeStack />
    </Section>
    <Section sectionId="projects" sectionTitle="Projects">
      <ProjectStack />
    </Section>
    <Section sectionId="works" sectionTitle="Works">
      <WorkStack />
    </Section>
  </div>
);

export default Home;
