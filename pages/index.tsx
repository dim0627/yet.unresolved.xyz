import React from 'react';
// import Head from 'next/head';
import { Profile } from 'components/Profile';
import { Projects } from 'components/Projects';
import { graphcms } from 'lib/graphcms';

export default function Home({ profile, projects }) {
  return (
    <>
      <Profile profile={profile} />
      <Projects projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const { profiles, projects } = await graphcms.request(
    `
      {
        profiles {
          fullName
          description
          details
        }
        projects{
          title
          stacks
          description
          href
          repositoryUrl
        }
      }
    `,
  );

  console.log(profiles);

  return {
    props: {
      projects,
      profile: profiles[0],
    },
  };
}
