import { useAppStore } from '../stores/useAppStore';
import * as S from './Modal.styles';

export default function Modal({ children, title }) {
  const closeModal = useAppStore((state) => state.closeModal);

  return (
    <>
      <S.ModalBackdrop onClick={closeModal} />
      <S.ModalContainer>
        <S.ModalTitle>{title}</S.ModalTitle>
        {children}
      </S.ModalContainer>
    </>
  );
}
