// tslint:disable-next-line
require('dotenv').config();

import express from 'express';
import graphqlHttp from 'express-graphql';
import mongoose from 'mongoose';

const app = express();
const PORT = '8087';

import { gqlConfig } from './config/gqlConfig';
import { dbOpts } from './config/db';

app.use(express.json());
app.use('/gql', graphqlHttp(gqlConfig));

mongoose.connect(dbOpts.string, dbOpts.opts)
  .then(() => {
    app.listen(PORT);
  }).catch((err) => console.error(err));
