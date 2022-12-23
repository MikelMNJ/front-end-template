import { getColor } from 'helpers';
import { theme } from 'theme';
import styled, { createGlobalStyle } from 'styled-components';

const colors = theme.colors;

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => getColor(props, 'primary')};
    color: ${props => getColor(props, 'onPrimary')};
    font-family: ${props => props.theme?.fonts?.primary?.normal?.family}, sans-serif;
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 27rem;
  }

  a:link,
  a:visited {
    color: ${props => getColor(props, 'accent', colors.black)};
  }

  a:hover {
    color: ${props => getColor(props, 'accentHover', colors.grey)};
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
  padding: 1rem;
  width: 100%;
  height: ${props => props.token ? '100%' : 'inherit'};
`;

export const AppLogo = styled('div')`
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;