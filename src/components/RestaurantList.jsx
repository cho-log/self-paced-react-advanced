import styled from 'styled-components';
import { ALL_CATEGORY, CATEGORY_ICONS } from '../constants/categories';
import { useRestaurantStore } from '../store/useRestaurantStore';
import { textBody, textSubtitle } from '../styles/typography';

function RestaurantList({ restaurants, isLoading, error }) {
  const selectedCategory = useRestaurantStore((s) => s.selectedCategory);
  const selectRestaurant = useRestaurantStore((s) => s.selectRestaurant);

  if (isLoading) return <StatusText>불러오는 중...</StatusText>;
  if (error) return <StatusText>음식점 목록을 불러오지 못했습니다.</StatusText>;

  const filteredRestaurants =
    selectedCategory === ALL_CATEGORY
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === selectedCategory,
        );

  return (
    <ListContainer>
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <Item
            key={restaurant.id}
            role="button"
            tabIndex={0}
            onClick={() => selectRestaurant(restaurant)}
          >
            <CategoryIconWrapper>
              <CategoryIcon
                src={CATEGORY_ICONS[restaurant.category]}
                alt={restaurant.category}
              />
            </CategoryIconWrapper>
            <Info>
              <Name>{restaurant.name}</Name>
              <Description>{restaurant.description}</Description>
            </Info>
          </Item>
        ))}
      </ul>
    </ListContainer>
  );
}

const StatusText = styled.p`
  ${textBody}
  padding: 16px;
`;

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

const Item = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;

  cursor: pointer;
`;

const CategoryIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  margin-right: 16px;

  border-radius: 50%;
  background: var(--lighten-color);
`;

const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Name = styled.h3`
  ${textSubtitle}
`;

const Description = styled.p`
  ${textBody}
  display: -webkit-box;
  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export default RestaurantList;
