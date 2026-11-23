const RESTAURANT_LIST_URL = 'http://localhost:3000/restaurants';

async function getRestaurantList() {
  const response = await fetch(RESTAURANT_LIST_URL);

  if (!response.ok) {
    throw new Error(`음식점 조회 실패: ${response.status}`);
  }

  return response.json();
}

export const createRestaurantSlice = (set, get) => ({
  restaurantList: [],
  isAddingRestaurant: false,

  changeRestaurantList: (restaurantList) => set({ restaurantList: restaurantList }),
  changeIsAddingRestaurant: (isAddingRestaurant) => set({ isAddingRestaurant: isAddingRestaurant }),

  loadRestaurantList: async (getIgnore = () => false) => {
    const newRestaurantList = await getRestaurantList();

    if (!getIgnore()) {
      get().changeRestaurantList(newRestaurantList);
    }
  },

  addRestaurant: async (restaurant) => {
    if (get().isAddingRestaurant) return;
    set({ isAddingRestaurant: true });

    try {
      const response = await fetch(RESTAURANT_LIST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurant),
      });

      if (!response.ok) {
        throw new Error(`음식점 저장 실패: ${response.status}`);
      }

      get().changeRestaurantList(await getRestaurantList());
      get().closeModal();
    } catch (error) {
      console.error(error);
      alert(`음식점 조회 혹은 저장에 실패하였습니다.`);
    } finally {
      get().changeIsAddingRestaurant(false);
    }
  },
});
