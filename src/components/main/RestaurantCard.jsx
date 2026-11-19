import styled from "styled-components";
import { textBody, textSubtitle } from "../typography";

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
  ${textSubtitle}
  margin: 0;
`;

const RestaurantDescription=styled.p`
  ${textBody}
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
                <RestaurantName>
                    {restaurant.name}
                </RestaurantName>
                <RestaurantDescription>
                    {restaurant.description}
                </RestaurantDescription>
            </RestaurantInfo>
        </RestaurantItem>);
}

export default RestaurantCard;
