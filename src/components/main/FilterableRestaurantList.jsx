import RestaurantCard from "./RestaurantCard";
import { CATEGORIES } from "../../data/categories";

import styled from "styled-components";

const RestaurantFilterContainer=styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;
`;

const RestaurantFilterContainerSelect=styled.select`
  height: 44px;
  min-width: 125px;
  cursor: pointer;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
  padding: 8px;
`;

const RestaurantListContainer=styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  margin: 16px 0;
`;


function FilterableRestaurantList({ category, onChangeCategory, restaurants, onOpenModal }) {
    return (
        <main>
            <CatagoryFilter
                category={category}
                onChangeCategory={onChangeCategory}
            />
            <RestaurantList
                restaurants={restaurants}
                onOpenModal={onOpenModal}
            />
        </main>
    )
}

export default FilterableRestaurantList;

function CatagoryFilter({ category, onChangeCategory }) {
    return (
        <RestaurantFilterContainer>
            <RestaurantFilterContainerSelect
                name="category"
                id="category-filter"
                aria-label="음식점 카테고리 필터"
                value={category}
                onChange={(event) => onChangeCategory(event.target.value)}
            >
                <option value="전체">전체</option>

                {CATEGORIES.map((category) => (
                    <option key={category}>
                        {category}
                    </option>
                ))}
            </RestaurantFilterContainerSelect>
        </RestaurantFilterContainer>
    );
}

function RestaurantList({ restaurants, onOpenModal }) {
    const categoryImages = {
        한식: "korean",
        중식: "chinese",
        일식: "japanese",
        양식: "western",
        아시안: "asian",
        기타: "etc",
    };

    return (

        <RestaurantListContainer>
            <ul className="restaurant-list">
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        restaurant={restaurant}
                        onOpenModal={onOpenModal}
                        categoryImages={categoryImages}
                    />
                ))}
            </ul>
        </RestaurantListContainer>

    );
}
