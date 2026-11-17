import Modal from './Modal';
import * as S from './Modal.styles';

export default function RestaurantDetailModal({ restaurant, onClose }) {
  return (
    <Modal title={restaurant.name} onClose={onClose}>
      <S.RestaurantInfo>
        <S.RestaurantInfoDescription>{restaurant.description}</S.RestaurantInfoDescription>
      </S.RestaurantInfo>
      {/*닫기버튼*/}
      <S.ButtonContainer>
        <S.PrimaryButton type="button" onClick={onClose}>
          닫기
        </S.PrimaryButton>
      </S.ButtonContainer>
    </Modal>
  );
}
