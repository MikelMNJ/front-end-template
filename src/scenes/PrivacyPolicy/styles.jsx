import { getColor } from 'helpers';
import { theme } from 'theme';
import styled from 'styled-components';

const colors = theme.colors;

export const LegalDoc = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-radius: 0.35rem;
  color: ${props => getColor(props, 'onPrimary', colors.black)};
  padding: 1rem;
`;