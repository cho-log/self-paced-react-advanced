import { useCallback, useEffect, useState } from 'react';
import { getRestaurants, postRestaurant } from '../api/restaurants';

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRestaurants = useCallback(async () => {
    try {
      setError(null);
      const data = await getRestaurants();
      setRestaurants(data);
    } catch (e) {
      console.error('Error fetching restaurants:', e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  const addRestaurant = useCallback(
    async (newRestaurant) => {
      await postRestaurant(newRestaurant);
      await fetchRestaurants();
    },
    [fetchRestaurants],
  );

  return { restaurants, isLoading, error, addRestaurant };
}
