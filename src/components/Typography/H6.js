import styled, { withTheme } from 'styled-components';

const StyledH6 = styled('h6')`
  font-weight: unset;
  font-family: ${props => props.theme?.fonts?.secondary?.bold?.family}, sans-serif;
  font-size: 0.67rem;
  margin: 0;
`;

const H6 = withTheme(props => {
  const { theme, children, ...rest } = props;

  return (
    <StyledH6 theme={theme} {...rest}>
      {children}
    </StyledH6>
  );
});

export { H6 };