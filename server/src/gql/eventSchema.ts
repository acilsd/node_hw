import { buildSchema, GraphQLSchema } from 'graphql';
import { IEvent, IUser } from '../types/events.types';
import { eventModel } from '../models/event';
import { userModel } from '../models/user';
import bcrypt from 'bcryptjs';

interface IEventSchema {
  schema: GraphQLSchema;
  rootValue: any;
  graphiql: any;
}

interface IEVArgs {
  eventInput: IEvent;
}

interface IEUSerArgs {
  userInput: IUser;
}

export const eventSchema: IEventSchema = {

  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type User {
      _id: ID!
      email: String!
      password: String
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input UserInput {
      email: String!
      password: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
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

    createUser: (args: IEUSerArgs) => {
      return userModel.findOne({ email: args.userInput.email })
        .then((user) => {
          if (user) throw new Error('User already exists');
          return bcrypt.hash(args.userInput.password, 12);
        })
        .then((hpass) => {
          const user = new userModel({
            email: args.userInput.email,
            password: hpass,
          });

          return user.save();
        })
        .then((res: any) => {
          return { ...res._doc, password: null, _id: res.id };
        })
        .catch((err) => console.error(err));
    },
  },
  // debugger
  graphiql: true,
};
