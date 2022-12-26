import { importFonts } from 'helpers';
import { css, createGlobalStyle } from 'styled-components';

export const FontFaces = createGlobalStyle`
  ${props => props.theme && css`${importFonts(props)}`}
`;