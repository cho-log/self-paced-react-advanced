import { CATEGORIES } from '../constants/categories';
import * as S from './RestaurantList.styles';

const IMAGE_DIRECTORY = '/images';

function Restaurant({ restaurant, onSelectRestaurant }) {
  return (
    <S.RestaurantItem>
      <S.RestaurantButton type="button" onClick={() => onSelectRestaurant(restaurant)}>
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

export default function RestaurantList({ restaurants, onSelectRestaurant }) {
  return (
    <S.RestaurantListContainer>
      <ul>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} onSelectRestaurant={onSelectRestaurant} />
        ))}
      </ul>
    </S.RestaurantListContainer>
  );
}
