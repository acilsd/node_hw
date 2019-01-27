import * as React from 'react';
import styled from '../styled/theme';

interface IWrapper {
  className?: string;
  styles?: { width?: string, height?: string, justify?: string, padding?: string };
}

const WrapperDiv: React.SFC<IWrapper> = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

const Wrapper = styled(WrapperDiv) `
  width: ${(props) => `${props.styles.width || '100'}%`};
  height: ${(props) => `${props.styles.height || '100'}vh`};
  display: flex;
  justify-content: ${(props) => `${props.styles.justify || 'center'}`};
  align-items: center;
  text-align: center;
  padding: ${(props) => `${props.styles.padding || '0'}px`};
`;

export { Wrapper };
