import { GraphQLClient } from 'graphql-request';

export const graphcms = new GraphQLClient(
  'https://api-ap-northeast-1.graphcms.com/v2/ckd52xtrc4v6001zb616rdgaq/master',
  {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_BEARER_TOKEN}`,
    },
  },
);
