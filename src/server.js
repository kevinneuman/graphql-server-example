/* eslint no-console: 0 */
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schema';

const app = express();

app.use(
  '/graphql',
  bodyParser.json(),
  cors(),
  graphqlExpress(({ schema })),
);

app.use(
  '/graphiql',
  graphiqlExpress({ endpointURL: '/graphql' }),
);

app.listen(3000, () => {
  console.log('GraphQL server is now running on http://localhost:3000/graphql');
  console.log('Access GraphiQL at http://localhost:3000/graphiql');
});
