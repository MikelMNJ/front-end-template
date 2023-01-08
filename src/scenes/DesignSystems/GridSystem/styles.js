import { getColor } from 'helpers';
import { fonts } from 'controllers';
import styled, { css } from 'styled-components';

export const GridWrapper = styled('div')`
width: 100%;
display: inline-flex;
align-items: flex-end;
padding: 1rem 1rem 2.5rem 1rem;
width: fit-content;
border-radius: 1rem;
`;

export const GridUnit = styled('div')`
position: relative;
width: ${props => props.size / 16}rem;
height: ${props => props.size / 16}rem;
background-color: ${props => getColor(props, 'grey')};

&::after {
  position: absolute;
  bottom: -2rem;
  left: 0;
  right: 0;
  text-align: center;
  margin: 0 auto;
  font-family: ${fonts.primary.medium};
  content: '${props => props.size}';
  color: ${props => getColor(props, 'grey')};
  ${props => props.size <= 12 && css`margin-left: -0.125rem`}
  ${props => props.size === 8 && css`margin-left: -0.05rem`}
}
`;