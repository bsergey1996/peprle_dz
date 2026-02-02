import { FC } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../Components/MovieCard/MovieCard';
import { selectFavorites } from '../store/favoritesSlice';
import styles from './pages.module.css';

const Favorites: FC = () => {
  const favoriteMovies = useSelector(selectFavorites);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Мои фильмы</h1>

      {favoriteMovies.length > 0 ? (
        <div className={styles['movies-grid']}>
          {favoriteMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
              isFavorite={true}
            />
          ))}
        </div>
      ) : (
        <p className={styles['no-results']}>У вас пока нет избранных фильмов</p>
      )}
    </div>
  );
};

export default Favorites;
