export const createModalSlice = (set) => ({
  activeModal: null,
  selectedRestaurant: null,

  openAddRestaurantModal: () => set({ activeModal: 'addRestaurant' }),
  closeModal: () => set({ activeModal: null, selectedRestaurant: null }),
  selectRestaurant: (restaurant) => set({ activeModal: 'restaurantDetail', selectedRestaurant: restaurant }),
});
