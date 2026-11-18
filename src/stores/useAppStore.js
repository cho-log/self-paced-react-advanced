import { create } from 'zustand';

export const useAppStore = create((set) => ({
  category: '전체',
  activeModal: null,
  selectedRestaurant: null,
  restaurantList: [],
  isAddingRestaurant: false,

  changeCategory: (category) => set({ category: category }),
  changeRestaurantList: (restaurantList) => set({ restaurantList: restaurantList }),
  changeIsAddingRestaurant: (isAddingRestaurant) => set({ isAddingRestaurant: isAddingRestaurant }),

  closeModal: () => set({ activeModal: null, selectedRestaurant: null }),
  openAddRestaurantModal: () => set({ activeModal: 'addRestaurant' }),
  selectRestaurant: (restaurant) => set({ activeModal: 'restaurantDetail', selectedRestaurant: restaurant }),
}));
