
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

// Copy paste from favoritesSlice.ts
interface FavoritesState {
  favoriteIds: number[];
}

const initialState: FavoritesState = {
  favoriteIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const index = state.favoriteIds.indexOf(action.payload);
      if (index > -1) {
        state.favoriteIds.splice(index, 1);
      } else {
        state.favoriteIds.push(action.payload);
      }
    },
  },
});

const { toggleFavorite } = favoritesSlice.actions;

const selectIsFavorite = (movieId: number) => (state: any) =>
  (state.favorites?.favoriteIds || []).includes(movieId);

const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
  },
});

// Test
console.log('Initial state:', store.getState());

// Toggle movie 1
store.dispatch(toggleFavorite(1));
console.log('After toggle 1:', store.getState());

const isFav1 = selectIsFavorite(1)(store.getState());
const isFav2 = selectIsFavorite(2)(store.getState());

console.log('Is 1 favorite?', isFav1);
console.log('Is 2 favorite?', isFav2);

if (isFav1 && !isFav2) {
    console.log('Logic seems correct.');
} else {
    console.log('BUG REPRODUCED: Logic incorrect.');
}
