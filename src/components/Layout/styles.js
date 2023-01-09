import { appConstants } from 'modules';
import styled, { css } from 'styled-components';

const layoutWidth = appConstants.layoutWidth;

export const LayoutWrapper = styled('div')`
  ${props => props.inline && css`
    display: inline-flex;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    justify-content: space-between;
  `}

  width: 100%;
  max-width: ${layoutWidth}rem;
`;