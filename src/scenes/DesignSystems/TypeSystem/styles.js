import { getColor } from 'helpers';
import styled from 'styled-components';

export const TypeWrapper = styled('div')`
width: 100%;
display: flex;
`;

export const TypeCard = styled('div')`
  width: 9rem;
  flex-grow: 1;
  flex-basis: 0;
  color: ${props => getColor(props, 'grey')};
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

export const TypeSampleWrapper = styled('div')`
  display: grid;
  gap: 0 1rem;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const SampleTitle = styled('div')`
  width: 100%;
  color: ${props => getColor(props, 'grey')};
  border-bottom: 0.0625rem solid ${props => getColor(props, 'onSecondary')};
`;

export const SampleWrapper = styled('div')`
  width: 100%;
`;