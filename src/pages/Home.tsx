import { FC, useState } from 'react';
import SearchInput from '../Components/SearchInput/SearchInput';
import Button from '../Components/Button/Button';
import MovieCard from '../Components/MovieCard/MovieCard';
import { MOVIE_DATA } from '../mockData';
import styles from './pages.module.css';

const Home: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredMovies = MOVIE_DATA.filter(movie =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

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
        <Button onClick={() => console.log('Ищем:', searchValue)}>
          Искать
        </Button>
      </div>

      <div className={styles['movies-grid']}>
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            image={movie.image}
            isFavorite={movie.isFavorite}
          />
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <p className={styles['no-results']}>Ничего не найдено :(</p>
      )}
    </div>
  );
};

export default Home;
