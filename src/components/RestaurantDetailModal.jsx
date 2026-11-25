import { useAppStore } from '../stores/useAppStore';
import Modal from './Modal';
import * as S from './Modal.styles';

export default function RestaurantDetailModal() {
  const restaurant = useAppStore((state) => state.selectedRestaurant);
  const closeModal = useAppStore((state) => state.closeModal);

  return (
    <Modal title={restaurant.name}>
      <S.RestaurantInfo>
        <S.RestaurantInfoDescription>{restaurant.description}</S.RestaurantInfoDescription>
      </S.RestaurantInfo>
      {/*닫기버튼*/}
      <S.ButtonContainer>
        <S.PrimaryButton type="button" onClick={closeModal}>
          닫기
        </S.PrimaryButton>
      </S.ButtonContainer>
    </Modal>
  );
}
