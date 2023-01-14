import { getColor } from 'helpers';
import styled from 'styled-components';

export const TypeCards = styled('div')`
  display: flex;
  gap: 1rem;
`;

export const TypeCard = styled('div')`
  display: inline-flex;
  gap: 0.5rem;
  width: auto;
`;

export const FontDisplay = styled('div')`
display: flex;
align-items: center;
width: inherit;
`;

export const FontSample = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const SampleTitle = styled('div')`
  width: 100%;
  color: ${props => getColor(props, 'grey')};
  border-bottom: 0.0625rem solid ${props => getColor(props, 'onSecondary')};
`;

export const SampleWrapper = styled('div')`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;

  & > * {
    width: 21rem;
  }
`;