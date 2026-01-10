import styles from './MovieCard.module.css';

const MovieCard = ({ title, rating, image, isFavorite }) => {
  return (
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
  );
};

export default MovieCard;