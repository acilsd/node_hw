import * as React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from '../components/Wrapper';

const PageTwo: React.SFC<any> = (props) => {
  console.log(props);
  return (
    <Wrapper styles={{ padding: '10' }}>
      <Link to='/'> One </Link>
    </Wrapper>
  );
};

export { PageTwo };
