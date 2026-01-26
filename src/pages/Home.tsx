import { FC, useState, useEffect } from 'react';
import SearchInput from '../Components/SearchInput/SearchInput';
import Button from '../Components/Button/Button';
import MovieCard from '../Components/MovieCard/MovieCard';
import { searchMovies, Movie } from '../services/movieApi';
import styles from './pages.module.css';

const Home: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      setMovies([]);
      setSearched(false);
      return;
    }

    setLoading(true);
    setError(null);
    setSearched(true);

    const results = await searchMovies(searchValue);
    setMovies(results);
    setLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue.trim()) {
        handleSearch();
      } else {
        setMovies([]);
        setSearched(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Поиск</h1>
      <p className={styles.description}>
        Введите название фильма, сериала или мультфильма для поиска...
      </p>

      <div className={styles['search-bar']}>
        <SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button onClick={handleSearch}>
          Искать
        </Button>
      </div>

      {loading && <p className={styles['loading']}>Загрузка...</p>}
      {error && <p className={styles['error']}>Ошибка: {error}</p>}

      <div className={styles['movies-grid']}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            image={movie.image}
            isFavorite={false}
          />
        ))}
      </div>

      {searched && movies.length === 0 && !loading && (
        <p className={styles['no-results']}>Ничего не найдено :(</p>
      )}
    </div>
  );
};

export default Home;
