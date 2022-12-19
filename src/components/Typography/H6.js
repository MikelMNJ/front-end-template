import styled, { withTheme } from 'styled-components';

const StyledH6 = styled('h6')`
  font-weight: unset;
  font-family: ${props => props.theme?.fonts?.secondary?.bold?.family}, sans-serif;
  font-size: 0.67rem;
`;

const H6 = withTheme(props => {
  const { theme, children } = props;

  return (
    <StyledH6 theme={theme}>
      {children}
    </StyledH6>
  );
});

export { H6 };