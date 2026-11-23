import { create } from 'zustand';
import { createModalSlice } from './createModalSlice';
import { createRestaurantSlice } from './createRestaurantSlice';

export const useAppStore = create((set, get) => ({
  ...createModalSlice(set),
  ...createRestaurantSlice(set, get),

  category: '전체',

  changeCategory: (category) => set({ category: category }),
}));
