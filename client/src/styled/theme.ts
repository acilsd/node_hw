import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0; padding: 0;
  }
`;

interface IThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<IThemeInterface>;

export { css, keyframes, ThemeProvider };
export default styled;
