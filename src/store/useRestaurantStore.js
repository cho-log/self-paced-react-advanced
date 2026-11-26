import { create } from 'zustand';
import { ALL_CATEGORY } from '../constants/categories';

export const useRestaurantStore = create((set) => ({
  selectedCategory: ALL_CATEGORY,
  selectedRestaurant: null,
  isAddModalOpen: false,

  setSelectedCategory: (category) => set({ selectedCategory: category }),
  selectRestaurant: (restaurant) => set({ selectedRestaurant: restaurant }),
  clearSelectedRestaurant: () => set({ selectedRestaurant: null }),
  openAddModal: () => set({ isAddModalOpen: true }),
  closeAddModal: () => set({ isAddModalOpen: false }),
}));
