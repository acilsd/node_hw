import { eventModel } from '../models/event';
import { userModel } from '../models/user';

export const findEvents = async (ids: string[]) => {
  try {
    const events = await eventModel.find({ _id: { $in: ids } }) as any;
    return events.map((ev: any) => {
      return {
        ...ev._doc,
        _id: ev.id,
        date: new Date(ev._doc.date).toISOString(),
        creator: findUser.bind(this, ev.creator),
      };
    });
  } catch (err) {
    throw err;
  }
};

export const findUser = async (id: string) => {
  try {
    const users = await userModel.findById(id) as any;
    return { ...users._doc, _id: users.id, createdEvents: findEvents.bind(this, users._doc.createdEvents) };
  } catch (err) {
    throw err;
  }
};
