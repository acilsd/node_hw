import { GraphQLSchema } from 'graphql';
import { mainSchema } from './schemas/index';
import { mainResolver } from './resolvers/index';

interface IEventSchema {
  schema: GraphQLSchema;
  rootValue: any;
  graphiql: any;
}

export const eventSchema: IEventSchema = {

  schema: mainSchema,

  rootValue: mainResolver,
  // debugger
  graphiql: true,
};
