import { CATEGORIES } from '../constants/categories';
import {
  RestaurantItem,
  RestaurantButton,
  RestaurantCategory,
  CategoryIcon,
  RestaurantInfo,
  RestaurantName,
  RestaurantDescription,
  RestaurantListContainer,
} from './RestaurantList.styles';

const IMAGE_DIRECTORY = '/images';

function Restaurant({ restaurant, onSelectRestaurant }) {
  return (
    <RestaurantItem>
      <RestaurantButton type="button" onClick={() => onSelectRestaurant(restaurant)}>
        <RestaurantCategory>
          <CategoryIcon src={`${IMAGE_DIRECTORY}/category-${CATEGORIES[restaurant.category]}.png`} alt={restaurant.category} />
        </RestaurantCategory>
        <RestaurantInfo>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <RestaurantDescription>{restaurant.description}</RestaurantDescription>
        </RestaurantInfo>
      </RestaurantButton>
    </RestaurantItem>
  );
}

export default function RestaurantList({ restaurants, onSelectRestaurant }) {
  return (
    <RestaurantListContainer>
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} onSelectRestaurant={onSelectRestaurant} />
        ))}
      </ul>
    </RestaurantListContainer>
  );
}
