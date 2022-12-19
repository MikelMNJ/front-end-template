import { getColor } from 'helpers';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => getColor(props, 'primary')};
    color: ${props => getColor(props, 'onPrimary')};
    font-family: sans-serif;
  }
`;

export const StyledApp = styled('div')`
  background-color: ${props => getColor(props, 'primary')};
`;