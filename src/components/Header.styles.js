import styled from 'styled-components';

/* Header ********************************************/
export const Gnb = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  padding: 0 16px;

  background-color: var(--primary-color);
`;

export const GnbTitle = styled.h1`
  color: #fcfcfd;
  //기존 text-title에 있던 부분
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
`;

export const GnbButton = styled.button`
  height: 40px;

  border: none;
  border-radius: 8px;
  background: transparent;

  font-size: 24px;
  cursor: pointer;
`;

export const GnbButtonImg = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
