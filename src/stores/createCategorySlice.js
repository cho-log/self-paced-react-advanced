export const createCategorySlice = (set) => ({
  category: '전체',

  changeCategory: (category) => set({ category: category }),
});
