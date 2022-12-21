import styled from 'styled-components';

const StyledP = styled('p')`
  margin: 0;
  max-width: 42rem;
`;

const P = props => {
  const { children } = props;

  return (
    <StyledP>
      {children}
    </StyledP>
  );
};

export { P };