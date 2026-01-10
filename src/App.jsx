import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchInput from './Components/SearchInput/SearchInput';
import Button from './Components/Button/Button';
import MovieCard from './Components/MovieCard/MovieCard';
import { MOVIE_DATA } from './mockData';

function App() {
  const [searchValue, setSearchValue] = useState('');

  // Фильтруем фильмы по поиску
  const filteredMovies = MOVIE_DATA.filter(movie => 
     movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <h1 className="title">Поиск</h1>
        <p className="description">
          Введите название фильма, сериала или мультфильма для поиска...
        </p>

        <div className="search-bar">
          <SearchInput 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Button onClick={() => console.log('Ищем:', searchValue)}>
             Искать
          </Button>
        </div>

        {/* Сетка фильмов */}
        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard 
              key={movie.id}
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>
        
        {filteredMovies.length === 0 && (
           <p style={{marginTop: 20, color: '#777'}}>Ничего не найдено :(</p>
        )}

      </main>
    </div>
  );
}

export default App;