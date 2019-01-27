import { buildSchema, GraphQLSchema } from 'graphql';

const HARDCODED_EVENTS: IEvent[] = [];

export interface IGqlConfig {
  schema: GraphQLSchema;
  rootValue: any;
  graphiql: any;
}

export interface IEvent {
  _id: string;
  title: string;
  description: string;
  price: number;
  date: string;
}

interface IEVArgs {
  eventInput: IEvent;
}

export const gqlConfig: IGqlConfig = {
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: (): IEvent[] => HARDCODED_EVENTS,
    createEvent: (args: IEVArgs): IEvent => {
      const event = {
        _id: Date.now().toString(),
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: args.eventInput.price,
        date: args.eventInput.date,
      };

      HARDCODED_EVENTS.push(event);

      return event;
    },
  },
  // debugger
  graphiql: true,
};
