import * as React from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { ITestStore } from '../stores/TestStore';

import styled from '../styled/theme';
import { Wrapper } from '../components/Wrapper';

// if u haev any params
// interface IProps extends RouteComponentProps<{ id: string }> {

interface IProps extends RouteComponentProps<any> {
  test?: ITestStore;
}

const Div = styled('div')`
  display: flex;
  flex-flow: column wrap;

  & > h2 {
    margin-bottom: 20px;
  };

  & > p {
    font-size: 20px;
    margin-bottom: 10px;
  };
`;

@inject('test')
@observer
class PageOne extends React.Component<IProps> {
  componentDidMount() {
    this.props.test.setUsername('admin');
    this.props.test.setPassword('12345Uiop');
  }

  render() {
    return (
      <Wrapper styles={{ padding: '10' }}>
        <Div>
          <h2>Hello, anon</h2>
          <p>My name is {this.props.test.username}</p>
          <p>And my password is {this.props.test.password}</p>
          <Link to='/two'> Two </Link>
        </Div>
      </Wrapper>
    );
  }
}

export { PageOne };
