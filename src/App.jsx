import { useAppStore } from './stores/useAppStore';
import { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import RestaurantList from './components/RestaurantList';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import AddRestaurantModal from './components/AddRestaurantModal';

const RESTAURANT_LIST_URL = 'http://localhost:3000/restaurants';

export default function App() {
  const category = useAppStore((state) => state.category);
  const activeModal = useAppStore((state) => state.activeModal);
  const changeActiveModal = useAppStore((state) => state.changeActiveModal);
  const changeSelectedRestaurant = useAppStore((state) => state.changeSelectedRestaurant);
  const restaurantList = useAppStore((state) => state.restaurantList);
  const changeRestaurantList = useAppStore((state) => state.changeRestaurantList);
  const isAddingRestaurant = useAppStore((state) => state.isAddingRestaurant);
  const changeIsAddingRestaurant = useAppStore((state) => state.changeIsAddingRestaurant);

  const filteredRestaurants = filterRestaurants();

  useEffect(() => {
    let ignore = false;

    async function loadRestaurantList() {
      const newRestaurantList = await getRestaurantList();

      if (!ignore) {
        changeRestaurantList(newRestaurantList);
      }
    }

    loadRestaurantList();

    return () => {
      ignore = true;
    };
  }, []);

  async function getRestaurantList() {
    const response = await fetch(RESTAURANT_LIST_URL);
    return await response.json();
  }

  function filterRestaurants() {
    return category === '전체' ? restaurantList : restaurantList.filter((restaurant) => restaurant.category === category);
  }

  function handleModalClose() {
    changeActiveModal(null);
    changeSelectedRestaurant(null); //선택된 음식점 해제
  }

  function handleSelectRestaurant(restaurant) {
    changeSelectedRestaurant(restaurant);
    changeActiveModal('restaurantDetail');
  }

  function handleOpenAddRestaurant() {
    changeActiveModal('addRestaurant');
  }

  async function handleAddRestaurant(restaurant) {
    if (isAddingRestaurant) return;

    changeIsAddingRestaurant(true);

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

      changeRestaurantList(await getRestaurantList());
      handleModalClose();
    } catch (error) {
      console.error(error);
      alert(`음식점 저장에 실패하였습니다.`);
    } finally {
      changeIsAddingRestaurant(false);
    }
  }

  return (
    <>
      <Header onOpenAddRestaurant={handleOpenAddRestaurant} />
      <main>
        <CategoryFilter />
        <RestaurantList restaurants={filteredRestaurants} onSelectRestaurant={handleSelectRestaurant} />
      </main>
      <aside>
        {activeModal === 'restaurantDetail' && <RestaurantDetailModal onClose={handleModalClose} />}
        {activeModal === 'addRestaurant' && <AddRestaurantModal onAddRestaurant={handleAddRestaurant} onClose={handleModalClose} />}
      </aside>
    </>
  );
}
