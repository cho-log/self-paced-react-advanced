import Modal from "../modal/Modal";
import styled from "styled-components";

const ModalTitle=styled.h2`
  margin-bottom: 36px;
`;

const RestaurantInfo=styled.div`
  margin-bottom: 24px;
`;

const ButtonContainer=styled.div`
  display: flex;
`;


const ButtonItem=styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
const PrimaryButton=styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  background: var(--primary-color);

  color: var(--grey-100);
`;

const SecondaryButton=styled.button`
  width: 100%;
  height: 44px;

  margin-right: 16px;

  border: none;
  border-radius: 8px;

  font-weight: 600;
  cursor: pointer;

  border: 1px solid var(--grey-300);
  background: transparent;

  color: var(--grey-300);
`;

function RestaurantDetailModal({ restaurant, onCloseModal }) {
  return (
    <Modal onClose={onCloseModal}>
      <ModalTitle className="text-title">{restaurant.name}</ModalTitle>
      <RestaurantInfo>
        <p className="restaurant-info__description text-body">{restaurant.description}</p>
      </RestaurantInfo>
      <ButtonContainer>
        <PrimaryButton className="text-caption"
          onClick={onCloseModal}
        >닫기</PrimaryButton>
      </ButtonContainer>
    </Modal>

  );
}

export default RestaurantDetailModal;
