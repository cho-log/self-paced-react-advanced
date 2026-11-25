import { useAppStore } from './stores/useAppStore';
import { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import RestaurantList from './components/RestaurantList';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import AddRestaurantModal from './components/AddRestaurantModal';

export default function App() {
  const activeModal = useAppStore((state) => state.activeModal);
  const loadRestaurantList = useAppStore((state) => state.loadRestaurantList);

  useEffect(() => {
    let ignore = false;

    loadRestaurantList(() => ignore);

    return () => {
      ignore = true;
    };
  }, [loadRestaurantList]);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        {activeModal === 'restaurantDetail' && <RestaurantDetailModal />}
        {activeModal === 'addRestaurant' && <AddRestaurantModal />}
      </aside>
    </>
  );
}
