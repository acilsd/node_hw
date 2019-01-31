export interface IEvent {
  _id?: string;
  title: string;
  description: string;
  price: number;
  date: string;
}

export interface IUser {
  _id?: string;
  email: string;
  password: string;
}
