import { ModalBackdrop, ModalContainer, ModalTitle } from './Modal.styles';

export default function Modal({ children, title, onClose }) {
  return (
    <>
      <ModalBackdrop onClick={onClose} />
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContainer>
    </>
  );
}
