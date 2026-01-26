import { useState, FC } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchInput from './Components/SearchInput/SearchInput';
import Button from './Components/Button/Button';
import MovieCard from './Components/MovieCard/MovieCard';
import Login from './Components/Login/Login';
import { MOVIE_DATA } from './mockData';
import { useUser } from './context/UserContext';

const App: FC = () => {
  const { currentUser, login, logout } = useUser();

  const [searchValue, setSearchValue] = useState<string>('');

  const filteredMovies = MOVIE_DATA.filter(movie =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!currentUser) {
    return <Login onLogin={login} />;
  }

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div className="user-greeting">
            Привет, <b>{currentUser.name}</b>! 👋
          </div>
          <Button onClick={logout}>Выйти</Button>
        </div>

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

        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={String(movie.id)}
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p style={{ marginTop: 20, color: '#777' }}>Ничего не найдено :(</p>
        )}

      </main>
    </div>
  );
};

export default App;
