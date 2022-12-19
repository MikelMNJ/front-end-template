import styled, { withTheme } from 'styled-components';

const StyledH5 = styled('h5')`
  font-weight: unset;
  font-family: ${props => props.theme?.fonts?.secondary?.bold?.family}, sans-serif;
  font-size: 0.83rem;
`;

const H5 = withTheme(props => {
  const { theme, children } = props;

  return (
    <StyledH5 theme={theme}>
      {children}
    </StyledH5>
  );
});

export { H5 };