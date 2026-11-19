import * as S from './Header.styles';

const IMAGE_DIRECTORY = '/images';

export default function Header({ onOpenAddRestaurant }) {
  return (
    <S.Gnb>
      <S.GnbTitle>점심 뭐 먹지</S.GnbTitle>
      <S.GnbButton type="button" aria-label="음식점 추가" onClick={onOpenAddRestaurant}>
        <S.GnbButtonImg src={`${IMAGE_DIRECTORY}/add-button.png`} alt="음식점 추가" />
      </S.GnbButton>
    </S.Gnb>
  );
}
