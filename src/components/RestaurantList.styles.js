import styled from 'styled-components';

/* 음식점 목록 */
export const RestaurantListContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 16px;
  margin: 16px 0;
`;

export const RestaurantItem = styled.li`
  display: flex;
  align-items: flex-start;

  padding: 16px 8px;

  border-bottom: 1px solid #e9eaed;
`;

export const RestaurantCategory = styled.div`
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

export const CategoryIcon = styled.img`
  width: 36px;
  height: 36px;
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RestaurantName = styled.h3`
  margin: 0;
  /*기존 text-subtitle에 있던 부분*/
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
`;

export const RestaurantDescription = styled.p`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /*기존 text-body에 있던 부분*/
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

export const RestaurantButton = styled.button`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
`;
