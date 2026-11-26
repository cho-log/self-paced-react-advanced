import styled from 'styled-components';
import { ALL_CATEGORY, CATEGORIES } from '../constants/categories';
import { useRestaurantStore } from '../store/useRestaurantStore';

function CategoryFilter() {
  const selectedCategory = useRestaurantStore((s) => s.selectedCategory);
  const setSelectedCategory = useRestaurantStore((s) => s.setSelectedCategory);

  return (
    <FilterContainer>
      <Filter
        name="category"
        id="category-filter"
        aria-label="음식점 카테고리 필터"
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        {[ALL_CATEGORY, ...CATEGORIES].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Filter>
    </FilterContainer>
  );
}

const FilterContainer = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;

const Filter = styled.select`
  height: 44px;
  min-width: 125px;
  padding: 8px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
`;

export default CategoryFilter;
