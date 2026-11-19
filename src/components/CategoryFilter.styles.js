import styled from 'styled-components';

/* 카테고리/정렬 필터 */
export const RestaurantFilterContainer = styled.section`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  margin-top: 24px;
`;

export const RestaurantFilter = styled.select`
  height: 44px;
  min-width: 125px;

  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;

  font-size: 16px;
  /*기존 restaurant-filter에 있던 부분*/
  padding: 8px;
`;
