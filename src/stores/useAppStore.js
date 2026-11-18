import { create } from 'zustand';

export const useAppStore = create((set) => ({
  category: '전체',
  activeModal: null,
  selectedRestaurant: null,
  restaurantList: [],
  isAddingRestaurant: false,

  changeCategory: (category) => set({ category: category }),
  changeActiveModal: (activeModal) => set({ activeModal: activeModal }),
  changeSelectedRestaurant: (selectedRestaurant) => set({ selectedRestaurant: selectedRestaurant }),
  changeRestaurantList: (restaurantList) => set({ restaurantList: restaurantList }),
  changeIsAddingRestaurant: (isAddingRestaurant) => set({ isAddingRestaurant: isAddingRestaurant }),
}));
