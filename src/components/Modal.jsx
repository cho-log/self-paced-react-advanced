import styled from 'styled-components';
import { textTitle } from '../styles/typography';

// 두 모달이 같이 쓰는 틀. 안쪽 내용은 children으로 받는다.
function Modal({ title, onClose, children }) {
  return (
    <>
      <Backdrop onClick={onClose} />
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </>
  );
}

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  padding: 32px 16px;

  border-radius: 8px 8px 0px 0px;
  background: var(--grey-100);
`;

const Title = styled.h2`
  ${textTitle}
  margin-bottom: 36px;
`;

export default Modal;
