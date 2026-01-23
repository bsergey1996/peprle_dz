import { FC } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOVIE_DATA } from '../mockData';
import Button from '../Components/Button/Button';
import styles from './pages.module.css';

const MovieDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = MOVIE_DATA.find(m => m.id === Number(id));

  if (!movie) {
    return (
      <div className={styles.pageContainer}>
        <h1>Фильм не найден</h1>
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
          <p className={styles['movie-rating']}>⭐ Рейтинг: {movie.rating}/10</p>
          
          <div className={styles['movie-description']}>
            <p>
              Это замечательный фильм, который заслуживает вашего внимания. 
              Отличная история, прекрасная игра актёров и потрясающая операторская работа 
              делают это произведение одним из лучших в своем жанре.
            </p>
            <p>
              Фильм рассказывает увлекательную историю о необычных персонажах, 
              которые сталкиваются с проблемами и вынуждены принимать сложные решения. 
              Каждая сцена наполнена смыслом и эмоциями.
            </p>
          </div>

          <div className={styles['movie-meta']}>
            <div className={styles['meta-item']}>
              <span className={styles['meta-label']}>Жанр:</span>
              <span>Драма, Триллер</span>
            </div>
            <div className={styles['meta-item']}>
              <span className={styles['meta-label']}>Год:</span>
              <span>2024</span>
            </div>
            <div className={styles['meta-item']}>
              <span className={styles['meta-label']}>Страна:</span>
              <span>США</span>
            </div>
          </div>

          <Button onClick={() => console.log('Добавить в избранное')}>
            {movie.isFavorite ? '❤️ В избранном' : '🤍 Добавить в избранное'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
