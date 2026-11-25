import { useAppStore } from '../stores/useAppStore.js';
import { CATEGORIES } from '../constants/categories';
import * as S from './CategoryFilter.styles.js';

export default function CategoryFilter() {
  const category = useAppStore((state) => state.category);
  const changeCategory = useAppStore((state) => state.changeCategory);

  function handleChange(event) {
    changeCategory(event.target.value);
  }

  return (
    <S.RestaurantFilterContainer>
      <S.RestaurantFilter value={category} onChange={handleChange} id="category-filter" aria-label="음식점 카테고리 필터">
        <option value="전체">전체</option>
        {Object.keys(CATEGORIES).map((categoryName) => (
          <option key={categoryName} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </S.RestaurantFilter>
    </S.RestaurantFilterContainer>
  );
}
