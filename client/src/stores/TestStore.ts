import { action, computed, get, observable } from 'mobx';

export interface ITestStore {
  username: string;
  password: string;
  setUsername(username: string): void;
  setPassword(password: string): void;
}

class TestStore implements ITestStore {
  @observable username: string = '';
  @observable password: string = '';

  @observable test = {
    name: 'admin',
    passwodr: 'admins',
  };

  @action.bound
  setUsername(username: string) {
    this.username = username;
  }

  @action.bound
  setPassword(password: string) {
    this.password = password;
  }

  @computed get something() {
    console.log(get(this.test, 'name'));
    return get(this.test, 'name');
  }
}

export default new TestStore();
