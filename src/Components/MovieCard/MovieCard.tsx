import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  id: number;
  title: string;
  rating: number;
  image: string;
  isFavorite: boolean;
}

const MovieCard: FC<MovieCardProps> = ({ id, title, rating, image, isFavorite }) => {
  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
      <div className={styles['movie-card']}>
        <div className={styles['card-image-wrapper']}>
          <img src={image} alt={title} className={styles['card-image']} />
          <div className={styles['card-rating']}>{rating}</div>
          <div className={`${styles['card-favorite']} ${isFavorite ? styles.active : ''}`}>
            ♥
          </div>
        </div>
        <h3 className={styles['card-title']}>{title}</h3>
      </div>
    </Link>
  );
};

export default MovieCard;
