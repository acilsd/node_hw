import bcrypt from 'bcryptjs';

import { eventModel } from '../../models/event';
import { userModel } from '../../models/user';

import { findUser } from '../../utils/relations';
import { IEvent, IUser } from '../../types/events.types';

interface IEVArgs {
  eventInput: IEvent;
}

interface IEUSerArgs {
  userInput: IUser;
}

export const mainResolver = {
  events: async () => {
    try {
      const events = await eventModel.find();
      return events.map((ev: any) => {
        return {
          ...ev._doc,
          _id: ev.id,
          date: new Date(ev._doc.date).toISOString(),
          creator: findUser.bind(this, ev._doc.creator),
        };
      });
    } catch (err) {
      throw err;
    }
  },

  createEvent: async (args: IEVArgs) => {
    const event = new eventModel({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: '5c5360ebd7775d23781195cc', // hardcoded
    });

    try {
      let createdEvent: any;

      const result = await event.save() as any;
      // hardcoded
      createdEvent = {
        ...result._doc,
        _id: result.id,
        date: new Date(result._doc.date).toISOString(),
        creator: findUser.bind(this, result._doc.creator),
      };
      const usr = await userModel.findById('5c5360ebd7775d23781195cc') as any;

      if (!usr) throw new Error('User does not exist');
      usr.createdEvents.push(event);
      usr.save();
      return createdEvent;
    } catch (err) {
      throw err;
    }

  },

  createUser: async (args: IEUSerArgs) => {
    try {
      const targetUser = await userModel.findOne({ email: args.userInput.email });
      if (targetUser) throw new Error('User already exists');

      const hashedPass = await bcrypt.hash(args.userInput.password, 12);

      const user = new userModel({
        email: args.userInput.email,
        password: hashedPass,
      });

      const res = await user.save() as any;
      return { ...res._doc, password: null, _id: res.id };
    } catch (err) {
      throw err;
    }
  },
};
