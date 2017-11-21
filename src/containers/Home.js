import React from 'react';
import { Link } from 'react-router-dom'

import Frontmatters from '../frontmatters';

import Section from '../components/Section';
import Hero from '../components/Hero';
import MeStack from '../components/MeStack';
import Work from '../components/Work';
import Project from '../components/Project';

const Home = () => (
  <div>
    <Hero />

    <Section sectionId="me" sectionTitle="Me">
      <MeStack />
    </Section>

    <Section sectionId="projects" sectionTitle="Projects">
      <div>
        <div>
          {Frontmatters.projects.filter((p) => p.index).map((p, i) =>
            <Project key={i} {...p} />
          )}
        </div>
        <div className="readmore">
          <Link to="/projects">See All Projects</Link>
        </div>
      </div>
    </Section>

    <Section sectionId="works" sectionTitle="Works">
      <div>
        {Frontmatters.works.map((work, i) => <Work key={i} {...work} />)}
      </div>
    </Section>

  </div>
);

export default Home;
