import styled from 'styled-components';

const StyledUL = styled('ul')`
  max-width: 42rem;
  margin: 0;
`;

const UL = props => {
  const { children, ...rest } = props;

  return (
    <StyledUL {...rest}>
      {children}
    </StyledUL>
  );
};

export { UL };