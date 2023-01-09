import { getColor, hexValid } from 'helpers';
import { appConstants } from 'modules';
import styled from 'styled-components';

const light = appConstants.themes.light;

export const ColorSampleWrapper = styled('div')`
text-align: end;
width: fit-content;
height: auto;
`;

export const ColorDescription = styled('div')`
display: flex;
flex-direction: column;
min-width: 22rem;
`;

export const Palette = styled('div')`
display: flex;
flex-wrap: wrap;
gap: 2rem;
width: 100%;
`;

export const ColorSectionWrapper = styled('div')`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const ColorSample = styled('div')`
  width: 13rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${props => {
    const lightTheme = props.selectedTheme === light;
    return getColor(props, lightTheme ? 'lightGrey' : 'darkGrey');
  }};
  background-color: ${props => hexValid(props.color)};
`;

export const ColorDetails = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.5rem;
`;