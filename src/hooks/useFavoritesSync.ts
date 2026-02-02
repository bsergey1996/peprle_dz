import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';
import { setFavorites, selectFavorites } from '../store/favoritesSlice';
import { useUser } from '../context/UserContext';

export const useFavoritesSync = () => {
  const dispatch: AppDispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavorites);
  const { currentUser } = useUser();
  const initializedUser = useRef<string | null>(null);

  const getStorageKey = (username: string | null | undefined) => {
    return `favorites_${username || 'guest'}`;
  };

  // Load favorites from localStorage when user logs in
  useEffect(() => {
    if (currentUser?.name) {
      const storageKey = getStorageKey(currentUser.name);

      // If we are already initialized for this user, don't reload
      if (initializedUser.current === currentUser.name) {
        return;
      }

      const savedFavorites = localStorage.getItem(storageKey);

      if (savedFavorites) {
        try {
          const favorites = JSON.parse(savedFavorites);
          if (Array.isArray(favorites)) {
            dispatch(setFavorites(favorites));
          } else {
            dispatch(setFavorites([]));
          }
        } catch (error) {
          console.error('Failed to parse saved favorites:', error);
          dispatch(setFavorites([]));
        }
      } else {
        dispatch(setFavorites([]));
      }

      // Mark as initialized for THIS user
      initializedUser.current = currentUser.name;
    } else {
      dispatch(setFavorites([]));
      initializedUser.current = null;
    }
  }, [currentUser?.name, dispatch]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    // Only save if we are logged in AND the current user matches the initialized user
    // This strictly prevents saving during the transition period between users
    if (currentUser?.name && initializedUser.current === currentUser.name) {
      const storageKey = getStorageKey(currentUser.name);
      localStorage.setItem(storageKey, JSON.stringify(favoriteMovies));
    }
  }, [favoriteMovies, currentUser?.name]);
};
