import styled from 'styled-components';
import { textCaption } from '../styles/typography';

export const ButtonContainer = styled.div`
  display: flex;
`;

export const PrimaryButton = styled.button`
  ${textCaption}
  width: 100%;
  height: 44px;

  border: none;
  border-radius: 8px;
  background: var(--primary-color);

  color: var(--grey-100);
  font-weight: 600;
  cursor: pointer;
`;
