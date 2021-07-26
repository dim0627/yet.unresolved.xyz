import React from 'react';
import Head from 'next/head';
import { Profile } from 'components/Profile';
import { Projects } from 'components/Projects';
import { Careers } from 'components/Careers';
import { Footer } from 'components/Footer';
import { graphcms } from 'lib/graphcms';

export default function Home({ profile, projects, careers }) {
  return (
    <>
      <Head>
        <title>Daisuke Tsuji&apos;s portfolio</title>
      </Head>
      <Profile profile={profile} />
      <Projects projects={projects} />
      <Careers careers={careers} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { profiles, projects, careers } = await graphcms.request(
    `
      {
        profiles {
          id
          fullName
          description
          details
          twitterUrl
          gitHubUrl
          linkedInUrl
          facebookUrl
          emailAddress
        }
        projects {
          id
          title
          stacks
          description
          href
          repositoryUrl
        }
        careers {
          id
          companyName
          stacks
          roles
          joinedAt
          leavedAt
          subcontracting
        }
      }
    `,
  );

  return {
    props: {
      projects,
      careers,
      profile: profiles[0],
    },
    revalidate: 60 * 60 * 12,
  };
}
