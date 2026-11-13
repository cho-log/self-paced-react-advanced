import { CATEGORIES } from '../constants/categories';
import { RestaurantFilterContainer, RestaurantFilter } from './CategoryFilter.styles.js';

export default function CategoryFilter({ category, onChangeCategory }) {
  function handleChange(event) {
    onChangeCategory(event.target.value);
  }

  return (
    <RestaurantFilterContainer>
      <RestaurantFilter value={category} onChange={handleChange} id="category-filter" aria-label="음식점 카테고리 필터">
        <option value="전체">전체</option>
        {Object.keys(CATEGORIES).map((categoryName) => (
          <option key={categoryName} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </RestaurantFilter>
    </RestaurantFilterContainer>
  );
}
