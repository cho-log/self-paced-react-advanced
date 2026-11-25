import { useAppStore } from '../stores/useAppStore';
import * as S from './Header.styles';

const IMAGE_DIRECTORY = '/images';

export default function Header() {
  const openAddRestaurantModal = useAppStore((state) => state.openAddRestaurantModal);

  return (
    <S.Gnb>
      <S.GnbTitle>점심 뭐 먹지</S.GnbTitle>
      <S.GnbButton type="button" aria-label="음식점 추가" onClick={openAddRestaurantModal}>
        <S.GnbButtonImg src={`${IMAGE_DIRECTORY}/add-button.png`} alt="음식점 추가" />
      </S.GnbButton>
    </S.Gnb>
  );
}
