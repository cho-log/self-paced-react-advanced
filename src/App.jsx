import './App.css';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import RestaurantList from './components/RestaurantList';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import AddRestaurantModal from './components/AddRestaurantModal';
import CustomPointer from './components/CustomPointer';
import { useRestaurantStore } from './store/useRestaurantStore';
import { useRestaurants } from './hooks/useRestaurants';

function App() {
  const { restaurants, isLoading, error, addRestaurant } = useRestaurants();
  const selectedRestaurant = useRestaurantStore((s) => s.selectedRestaurant);
  const clearSelectedRestaurant = useRestaurantStore(
    (s) => s.clearSelectedRestaurant,
  );
  const isAddModalOpen = useRestaurantStore((s) => s.isAddModalOpen);

  return (
    <>
      <CustomPointer />
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList
          restaurants={restaurants}
          isLoading={isLoading}
          error={error}
        />
      </main>
      <aside>
        {selectedRestaurant && (
          <RestaurantDetailModal
            restaurant={selectedRestaurant}
            onClose={clearSelectedRestaurant}
          />
        )}
        {isAddModalOpen && (
          <AddRestaurantModal onAddRestaurant={addRestaurant} />
        )}
      </aside>
    </>
  );
}

export default App;
