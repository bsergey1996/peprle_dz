import './MovieCard.css';

const MovieCard = ({ title, rating, image, isFavorite }) => {
  return (
    <div className="movie-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <div className="card-rating">{rating}</div>
        <div className={`card-favorite ${isFavorite ? 'active' : ''}`}>
           ♥
        </div>
      </div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default MovieCard;