import { getColor } from 'helpers';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => getColor(props, 'primary')};
    color: ${props => getColor(props, 'onPrimary')};
    font-family: sans-serif;
    margin: 0;
  }
`;

export const StyledApp = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background-color: ${props => getColor(props, 'primary')};
`;

export const StyledHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  width: 100%;
  background-color: ${props => getColor(props, 'secondary')};
  color: ${props => getColor(props, 'onSecondary')};
`;

export const StyledFooter = styled('footer')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  width: 100%;
  background-color: ${props => getColor(props, 'secondary')};
  color: ${props => getColor(props, 'onSecondary')};
`;

export const MainContent = styled('main')`
  display: flex;
  padding: 1rem;
`;