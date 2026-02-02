import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite, selectIsFavorite } from '../../store/favoritesSlice';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  id: string;
  title: string;
  rating: number;
  image: string;
  isFavorite?: boolean; // Keep for backward compatibility if passed manually, though selector takes precedence
}

const MovieCard: FC<MovieCardProps> = ({ id, title, rating, image }) => {
  const dispatch = useDispatch();
  // id is string, no parsing needed
  const isFavorite = useSelector(selectIsFavorite(id));

  const handleFavoriteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    // Dispatch full object
    dispatch(toggleFavorite({
      id,
      title,
      rating,
      image
    }));
  };

  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
      <div className={styles['movie-card']}>
        <div className={styles['card-image-wrapper']}>
          <img src={image} alt={title} className={styles['card-image']} />
          <div className={styles['card-rating']}>{rating.toFixed(1)}</div>
          <button
            type="button"
            aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
            className={`${styles['card-favorite']} ${isFavorite ? styles.active : ''}`}
            onClick={handleFavoriteClick}
          >
            ♥
          </button>
        </div>
        <h3 className={styles['card-title']}>{title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
