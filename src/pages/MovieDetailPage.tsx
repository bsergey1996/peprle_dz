import { FC } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { MovieDetails } from '../services/movieApi';
import Button from '../Components/Button/Button';
import styles from './pages.module.css';

const MovieDetailPage: FC = () => {
  const navigate = useNavigate();
  const movie = useLoaderData() as MovieDetails | null;

  if (!movie) {
    return (
      <div className={styles.pageContainer}>
        <h1>Фильм не найден</h1>
        <p>Возможно, фильм был удалён или ID не корректен.</p>
        <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
      </div>
    );
  }

    return (
      <div className={styles.pageContainer}>
        <Button onClick={() => navigate('/')}>← Вернуться</Button>
        
        <div className={styles.movieDetail}>
          <img 
            src={movie.image} 
            alt={movie.title} 
            className={styles['movie-detail-image']}
          />
          <div className={styles['movie-detail-info']}>
            <h1>{movie.title}</h1>
            <p className={styles['movie-rating']}>⭐ Рейтинг: {movie.rating?.toFixed(1) || 'N/A'}/10</p>
            
            <div className={styles['movie-description']}>
              <p>
                {movie.description || 'Описание не доступно'}
              </p>
            </div>

            <div className={styles['movie-meta']}>
              {movie.genres && movie.genres.length > 0 && (
                <div className={styles['meta-item']}>
                  <span className={styles['meta-label']}>Жанр:</span>
                  <span>{movie.genres.join(', ')}</span>
                </div>
              )}
              {movie.year && (
                <div className={styles['meta-item']}>
                  <span className={styles['meta-label']}>Год:</span>
                  <span>{movie.year}</span>
                </div>
              )}
              {movie.directors && movie.directors.length > 0 && (
                <div className={styles['meta-item']}>
                  <span className={styles['meta-label']}>Режиссёр:</span>
                  <span>{movie.directors.join(', ')}</span>
                </div>
              )}
              {movie.actors && movie.actors.length > 0 && (
                <div className={styles['meta-item']}>
                  <span className={styles['meta-label']}>Актёры:</span>
                  <span>{movie.actors.slice(0, 3).join(', ')}</span>
                </div>
              )}
            </div>

            <Button onClick={() => console.log('Добавить в избранное')}>
              🤍 Добавить в избранное
            </Button>
          </div>
        </div>
      </div>
    );
};

export default MovieDetailPage;
