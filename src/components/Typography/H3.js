import { fonts } from 'controllers';
import styled, { withTheme } from 'styled-components';

const StyledH3 = styled('h3')`
  font-weight: unset;
  font-family: ${fonts?.secondary?.bold};
  font-size: 1.375rem;
  margin: 0;
`;

const H3 = withTheme(props => {
  const { theme, children, ...rest } = props;

  return (
    <StyledH3 theme={theme} {...rest}>
      {children}
    </StyledH3>
  );
});

export { H3 };