import { appConstants } from 'modules';
import styled, { css } from 'styled-components';

const layouts = appConstants.layouts;

const getLayoutColumns = props => {
  if (props.columns) {
    const size = Object.values(layouts).find(value => value.columns === props.columns);
    return css`grid-template-columns: repeat(${size?.columns || 1}, 1fr);`;
  }

  return css`grid-template-columns: 1fr;`;
};

export const LayoutWrapper = styled('div')`
  display: grid;
  gap: 0 2rem;
  width: ${layouts.full.width};
  ${props => getLayoutColumns(props)};
`;