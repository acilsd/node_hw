import { buildSchema, GraphQLSchema } from 'graphql';

interface IGqlConfig {
  schema: GraphQLSchema;
  rootValue: any;
  graphiql: any;
}

export const gqlConfig: IGqlConfig = {
  schema: buildSchema(`
    type RootQuery {
      events: [String!]!
    }

    type RootMutation {
      createEvent(name: String): String
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: (): string[] => ['Some string', 'Some string#2'],
    createEvent: (args: { name: string }): string => args.name,
  },
  // debugger
  graphiql: true,
};
