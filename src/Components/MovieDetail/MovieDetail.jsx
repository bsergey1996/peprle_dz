import './MovieDetail.css';

const MovieDetail = ({ movie }) => {
  // Если фильм не передали, ничего не рендерим (или можно показать заглушку)
  if (!movie) return null;

  return (
    <div className="movie-detail">
      {/* Шапка с кнопкой назад и заголовком */}
      <div className="detail-header">
        <div className="back-btn">← Назад</div>
        <h1 className="detail-title">{movie.title}</h1>
      </div>

      <div className="detail-content">
        {/* Левая колонка: Постер */}
        <div className="detail-poster-wrapper">
          <img src={movie.image} alt={movie.title} className="detail-poster" />
        </div>

        {/* Правая колонка: Информация */}
        <div className="detail-info">
          <p className="detail-description">
            Это описание фильма. Так как в наших мок-данных нет длинного текста, 
            представим здесь захватывающий сюжет. Герой отправляется в опасное 
            путешествие, чтобы спасти мир и найти себя. Невероятные спецэффекты 
            и глубокий смысл гарантированы.
          </p>

          <div className="detail-actions">
            <span className="rating-badge">⭐ {movie.rating}</span>
            <button className="favorite-btn">♥ В избранное</button>
          </div>

          {/* Характеристики (Тип, Дата, Длительность...) */}
          <div className="detail-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Тип</span>
              <span className="meta-value">Movie</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Дата выхода</span>
              <span className="meta-value">2023-05-12</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Длительность</span>
              <span className="meta-value">124 мин</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Жанр</span>
              <span className="meta-value">Sci-Fi, Adventure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;