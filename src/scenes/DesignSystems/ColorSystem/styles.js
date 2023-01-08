import { getColor, hexValid } from 'helpers';
import styled from 'styled-components';

export const ColorSampleWrapper = styled('div')`
text-align: end;
width: fit-content;
height: auto;
`;

export const ColorDescription = styled('div')`
display: flex;
flex-direction: column;
width: 24rem;
`;

export const Palette = styled('div')`
display: flex;
flex-wrap: wrap;
gap: 2rem;
width: 100%;
`;

export const ColorSectionWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const ColorSample = styled('div')`
  width: 10rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${props => getColor(props, 'onSecondary')};
  background-color: ${props => hexValid(props.color)};
`;