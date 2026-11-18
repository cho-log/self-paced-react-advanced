import { useAppStore } from '../stores/useAppStore';
import { CATEGORIES } from '../constants/categories';
import * as S from './RestaurantList.styles';

const IMAGE_DIRECTORY = '/images';

function Restaurant({ restaurant }) {
  const selectRestaurant = useAppStore((state) => state.selectRestaurant);

  return (
    <S.RestaurantItem>
      <S.RestaurantButton type="button" onClick={() => selectRestaurant(restaurant)}>
        <S.RestaurantCategory>
          <S.CategoryIcon src={`${IMAGE_DIRECTORY}/category-${CATEGORIES[restaurant.category]}.png`} alt={restaurant.category} />
        </S.RestaurantCategory>
        <S.RestaurantInfo>
          <S.RestaurantName>{restaurant.name}</S.RestaurantName>
          <S.RestaurantDescription>{restaurant.description}</S.RestaurantDescription>
        </S.RestaurantInfo>
      </S.RestaurantButton>
    </S.RestaurantItem>
  );
}

export default function RestaurantList() {
  const category = useAppStore((state) => state.category);
  const restaurantList = useAppStore((state) => state.restaurantList);

  function filterRestaurantList() {
    return category === '전체' ? restaurantList : restaurantList.filter((restaurant) => restaurant.category === category);
  }

  return (
    <S.RestaurantListContainer>
      <ul>
        {filterRestaurantList().map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </ul>
    </S.RestaurantListContainer>
  );
}
