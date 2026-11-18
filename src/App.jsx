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
  const activeModal = useAppStore((state) => state.activeModal);
  const changeRestaurantList = useAppStore((state) => state.changeRestaurantList);
  const isAddingRestaurant = useAppStore((state) => state.isAddingRestaurant);
  const changeIsAddingRestaurant = useAppStore((state) => state.changeIsAddingRestaurant);
  const closeModal = useAppStore((state) => state.closeModal);

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
      closeModal();
    } catch (error) {
      console.error(error);
      alert(`음식점 저장에 실패하였습니다.`);
    } finally {
      changeIsAddingRestaurant(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {activeModal === 'restaurantDetail' && <RestaurantDetailModal />}
        {activeModal === 'addRestaurant' && <AddRestaurantModal onAddRestaurant={handleAddRestaurant} />}
      </aside>
    </>
  );
}
