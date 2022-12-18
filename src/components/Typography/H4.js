import styled, { withTheme } from 'styled-components';

const StyledH4 = styled('h4')`
  font-weight: unset;
  font-family: ${props => props.theme.fonts.secondary.bold.family}, sans-serif;
`;

const H4 = withTheme(props => {
  const { theme, children } = props;

  return (
    <StyledH4 theme={theme}>
      {children}
    </StyledH4>
  );
});

export { H4 };