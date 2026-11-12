import styled from 'styled-components';
import Modal from './Modal';
import { ButtonContainer, PrimaryButton } from './Button';
import { textBody } from '../styles/typography';

function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal title={restaurant.name} onClose={onClose}>
      <Description>{restaurant.description}</Description>
      <ButtonContainer>
        <PrimaryButton type="button" onClick={onClose}>
          확인
        </PrimaryButton>
      </ButtonContainer>
    </Modal>
  );
}

const Description = styled.p`
  ${textBody}
  margin-bottom: 24px;
`;

export default RestaurantDetailModal;
