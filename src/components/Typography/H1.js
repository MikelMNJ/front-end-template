import styled, { withTheme } from 'styled-components';

const StyledH1 = styled('h1')`
  font-weight: unset;
  font-family: ${props => props.theme?.fonts?.secondary?.bold?.family}, sans-serif;
  font-size: 2rem;
  margin: 0;
`;

const H1 = withTheme(props => {
  const { theme, children } = props;

  return (
    <StyledH1 theme={theme}>
      {children}
    </StyledH1>
  );
});

export { H1 };