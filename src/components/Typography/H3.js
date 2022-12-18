import styled, { withTheme } from 'styled-components';

const StyledH3 = styled('h3')`
  font-weight: unset;
  font-family: ${props => props.theme.fonts.secondary.bold.family}, sans-serif;
  font-size: 1.375rem;
`;

const H3 = withTheme(props => {
  const { theme, children } = props;

  return (
    <StyledH3 theme={theme}>
      {children}
    </StyledH3>
  );
});

export { H3 };