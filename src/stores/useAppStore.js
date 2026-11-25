import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { createCategorySlice } from './createCategorySlice';
import { createModalSlice } from './createModalSlice';
import { createRestaurantSlice } from './createRestaurantSlice';

export const useAppStore = create(
  persist(
    (set, get) => ({
      ...createModalSlice(set),
      ...createRestaurantSlice(set, get),
      ...createCategorySlice(set),
    }),
    {
      name: 'app-store',
      partialize: (state) => ({ category: state.category }),
    },
  ),
);
