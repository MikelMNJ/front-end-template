import { getColor } from 'helpers';
import styled from 'styled-components';

export const TitleArea = styled('div')`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 12rem;
  padding: 0 3rem;
  width: 100%;
  background-color: ${props => getColor(props, 'onPrimary') + 10};

  h2 {
    margin: -0.5rem 0 0 -0.0625rem;
  }
`;

export const RightContent = styled('div')`
  text-align: right;
`;

export const ContentArea = styled('div')`
  padding: 3rem;
`;