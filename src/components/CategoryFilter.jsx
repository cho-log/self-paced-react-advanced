import styled from 'styled-components';
import { ALL_CATEGORY, CATEGORIES } from '../constants/categories';

function CategoryFilter({ category, onChangeCategory }) {
  return (
    <FilterContainer>
      <Filter
        name="category"
        id="category-filter"
        aria-label="음식점 카테고리 필터"
        value={category}
        onChange={(event) => onChangeCategory(event.target.value)}
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
