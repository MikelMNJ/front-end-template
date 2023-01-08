import styled from 'styled-components';

const StyledP = styled('p')`
  margin: 0;
  max-width: 34rem;
`;

const P = props => {
  const { children, ...rest } = props;

  return (
    <StyledP {...rest}>
      {children}
    </StyledP>
  );
};

export { P };