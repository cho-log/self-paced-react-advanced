import Modal from './Modal';
import { RestaurantInfo, ButtonContainer, PrimaryButton, RestaurantInfoDescription } from './Modal.styles';

export default function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal title={restaurant.name} onClose={onClose}>
      <RestaurantInfo>
        <RestaurantInfoDescription>{restaurant.description}</RestaurantInfoDescription>
      </RestaurantInfo>
      {/*닫기버튼*/}
      <ButtonContainer>
        <PrimaryButton type="button" onClick={onClose}>
          닫기
        </PrimaryButton>
      </ButtonContainer>
    </Modal>
  );
}
