import * as React from 'react';
import { render } from 'react-dom';

import { Provider as MobxProvider } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { RouteComponentProps, Router } from 'react-router-dom';

import TestStore from './stores/TestStore';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  test: TestStore,
};

const history = syncHistoryWithStore(browserHistory, routingStore);

import MountPoint from './MountPoint';

const root = document.getElementById('root');

render(
  <MobxProvider {...stores}>
    <Router history={history}>
      <MountPoint {...({} as RouteComponentProps<any>)}/>
    </Router>
  </MobxProvider>,
  root,
);
