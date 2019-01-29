import { buildSchema, GraphQLSchema } from 'graphql';
import { IEvent } from '../types/events.types';
import { eventModel } from '../models/event';

interface IGqlConfig {
  schema: GraphQLSchema;
  rootValue: any;
  graphiql: any;
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
    events: () => {
      return eventModel.find()
        .then((events) => {
          return events.map((ev: any) => {
            return { ...ev._doc, _id: ev.id };
          });
        })
        .catch((err) => { throw err; });
    },
    createEvent: (args: IEVArgs) => {
      const event = new eventModel({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: args.eventInput.price,
        date: new Date(args.eventInput.date),
      });

      return event.save()
        .then((res: any) => {
          console.log(res);
          return { ...res._doc, _id: res.id };
        })
        .catch((err) => {
          console.error(err);
          throw err;
        });

    },
  },
  // debugger
  graphiql: true,
};
