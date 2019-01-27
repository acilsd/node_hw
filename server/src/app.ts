import express from 'express';
import graphqlHttp from 'express-graphql';

const app = express();
const PORT = '8087';

import { gqlConfig } from './config/gqlConfig';

app.use(express.json());
app.use('/gql', graphqlHttp(gqlConfig));

app.listen(PORT, () => console.log(`listening ${PORT}`));
