import styled from "styled-components";

const RestaurantItem=styled.li`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;
`;

const RestaurantCategoryItem=styled.div`
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

const CategoryIcon=styled.img`
  width: 36px;
  height: 36px;
`;

const RestaurantInfo=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const RestaurantName=styled.p`
  margin: 0;
`;

const RestaurantDescription=styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const restaurantDistance=styled`
  color: var(--primary-color);
`;

function RestaurantCard({ restaurant, onOpenModal, categoryImages }) {
    return (
        <RestaurantItem
            key={restaurant.id}
            onClick={() => onOpenModal(restaurant)}
        >
            <RestaurantCategoryItem>
                <CategoryIcon
                    src={`/templates/category-${categoryImages[restaurant.category]}.png`}
                    alt={restaurant.category}
                />
            </RestaurantCategoryItem>
            <RestaurantInfo>
                <RestaurantName className="text-subtitle">
                    {restaurant.name}
                </RestaurantName>
                <RestaurantDescription className="n text-body">
                    {restaurant.description}
                </RestaurantDescription>
            </RestaurantInfo>
        </RestaurantItem>);
}

export default RestaurantCard;
