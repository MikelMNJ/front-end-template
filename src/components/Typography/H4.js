import styled, { withTheme } from 'styled-components';

const StyledH4 = styled('h4')`
  font-weight: unset;
  font-family: ${props => props.theme?.fonts?.secondary?.bold?.family}, sans-serif;
  font-size: 1.25rem;
  margin: 0;
`;

const H4 = withTheme(props => {
  const { theme, children, ...rest } = props;

  return (
    <StyledH4 theme={theme} {...rest}>
      {children}
    </StyledH4>
  );
});

export { H4 };