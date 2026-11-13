import { Gnb, GnbTitle, GnbButton, GnbButtonImg } from './Header.styles';

const IMAGE_DIRECTORY = '/images';

export default function Header({ onOpenAddRestaurant }) {
  return (
    <Gnb>
      <GnbTitle>점심 뭐 먹지</GnbTitle>
      <GnbButton type="button" aria-label="음식점 추가" onClick={onOpenAddRestaurant}>
        <GnbButtonImg src={`${IMAGE_DIRECTORY}/add-button.png`} alt="음식점 추가" />
      </GnbButton>
    </Gnb>
  );
}
