import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FavoriteMovie {
  id: string;
  title: string;
  rating: number;
  image: string;
}

export interface FavoritesState {
  items: FavoriteMovie[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<FavoriteMovie>) => {
      const index = state.items.findIndex(movie => movie.id === action.payload.id);
      if (index > -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
    // Optional: Keep these if needed, or remove. I'll keep a setFavorites for flexibility
    setFavorites: (state, action: PayloadAction<FavoriteMovie[]>) => {
      state.items = action.payload;
    },
  },
});

export const { toggleFavorite, setFavorites } = favoritesSlice.actions;

export const selectFavorites = (state: any): FavoriteMovie[] => state.favorites?.items || [];
export const selectIsFavorite = (movieId: string) => (state: any) =>
  (state.favorites?.items || []).some((movie: FavoriteMovie) => movie.id === movieId);
export const selectFavoriteCount = (state: any) => (state.favorites?.items || []).length;

export default favoritesSlice.reducer;
