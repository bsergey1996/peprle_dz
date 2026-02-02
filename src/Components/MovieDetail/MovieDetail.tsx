import { FC } from 'react';
import { Movie } from '../../mockData';
import styles from './MovieDetail.module.css';

interface MovieDetailProps {
  movie?: Movie;
}

const MovieDetail: FC<MovieDetailProps> = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className={styles['movie-detail']}>
      {/* Шапка с кнопкой назад и заголовком */}
      <div className={styles['detail-header']}>
        <div className={styles['back-btn']}>← Назад</div>
        <h1 className={styles['detail-title']}>{movie.title}</h1>
      </div>

      <div className={styles['detail-content']}>
        {/* Левая колонка: Постер */}
        <div className={styles['detail-poster-wrapper']}>
          <img src={movie.image} alt={movie.title} className={styles['detail-poster']} />
        </div>

        {/* Правая колонка: Информация */}
        <div className={styles['detail-info']}>
          <p className={styles['detail-description']}>
            Это описание фильма. Так как в наших мок-данных нет длинного текста,
            представим здесь захватывающий сюжет. Герой отправляется в опасное
            путешествие, чтобы спасить мир и найти себя. Невероятные спецэффекты
            и глубокий смысл гарантированы.
          </p>

          <div className={styles['detail-actions']}>
            <span className={styles['rating-badge']}>⭐ {movie.rating}</span>
            <button className={styles['favorite-btn']}>♥ В избранное</button>
          </div>

          {/* Характеристики (Тип, Дата, Длительность...) */}
          <div className={styles['detail-meta-grid']}>
            <div className={styles['meta-item']}>
              <span className={styles['meta-label']}>Тип</span>
              <span className={styles['meta-value']}>Movie</span>
            </div>
            <div className={styles['meta-item']}>
              <span className={styles['meta-label']}>Дата выхода</span>
              <span className={styles['meta-value']}>2023-05-12</span>
            </div>
            <div className={styles['meta-item']}>
              <span className={styles['meta-label']}>Длительность</span>
              <span className={styles['meta-value']}>124 мин</span>
            </div>
            <div className={styles['meta-item']}>
              <span className={styles['meta-label']}>Жанр</span>
              <span className={styles['meta-value']}>Sci-Fi, Adventure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
