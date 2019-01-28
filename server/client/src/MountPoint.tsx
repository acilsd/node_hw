import * as React from 'react';
import { hot } from 'react-hot-loader';

import { RouteComponentProps } from 'react-router-dom';

import { Route, Switch } from 'react-router-dom';

import { Wrapper } from './components/Wrapper';
import { PageOne } from './PageOne';
import { PageTwo } from './PageTwo';
import { GlobalStyle } from './styled/theme';

const MountPoint: React.SFC<RouteComponentProps<any>> = (props) => {
  return (
    <Wrapper styles={{ padding: '10' }}>
      <GlobalStyle />
      <Switch>
        <Route exact path={'/'} component={PageOne} />
        <Route exact path={'/two'} component={PageTwo} />
      </Switch>
    </Wrapper >
  );
};

export default hot(module)(MountPoint);
