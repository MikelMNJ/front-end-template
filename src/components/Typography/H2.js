import styled, { withTheme } from 'styled-components';

const StyledH2 = styled('h2')`
  font-weight: unset;
  font-family: ${props => props.theme.fonts.secondary.bold.family}, sans-serif;
  font-size: 1.625rem;
`;

const H2 = withTheme(props => {
  const { theme, children } = props;

  return (
    <StyledH2 theme={theme}>
      {children}
    </StyledH2>
  );
});

export { H2 };