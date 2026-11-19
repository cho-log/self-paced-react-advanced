import * as S from './Modal.styles';

export default function Modal({ children, title, onClose }) {
  return (
    <>
      <S.ModalBackdrop onClick={onClose} />
      <S.ModalContainer>
        <S.ModalTitle>{title}</S.ModalTitle>
        {children}
      </S.ModalContainer>
    </>
  );
}
