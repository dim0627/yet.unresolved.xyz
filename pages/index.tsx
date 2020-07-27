import React from 'react';
// import Head from 'next/head';
import { Profile } from 'components/Profile';
import { graphcms } from 'lib/graphcms';

export default function Home({ profile }) {
  return (
    <Profile />
  );
}

export async function getStaticProps() {
  const { profiles } = await graphcms.request(
    `
      {
        profiles {
          fullName
          description
          details
        }
      }
    `,
  );

  console.log(profiles);

  return {
    props: {
      profile: [],
    },
  };
}
