import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SearchInput from './Components/SearchInput/SearchInput';
import Button from './Components/Button/Button';
import MovieCard from './Components/MovieCard/MovieCard';
import Login from './Components/Login/Login'; // Импортируем новый компонент
import { MOVIE_DATA } from './mockData';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  // --- ЛОГИКА АУТЕНТИФИКАЦИИ ---
  const [users, setUsers] = useLocalStorage('users', []);
  const currentUser = users.find(user => user.isLogined);

  // Теперь эта функция чистая — она принимает данные (userName), а не событие (event)
  const handleLogin = (userName) => {
    const newUsers = users.map(u => ({ ...u, isLogined: false }));
    const existingUserIndex = newUsers.findIndex(u => u.name === userName);

    if (existingUserIndex !== -1) {
       newUsers[existingUserIndex].isLogined = true;
    } else {
       newUsers.push({ name: userName, isLogined: true });
    }

    setUsers(newUsers);
  };

  const handleLogout = () => {
    const newUsers = users.map(u => ({ ...u, isLogined: false }));
    setUsers(newUsers);
  };

  // --- ЛОГИКА ФИЛЬМОВ ---
  const [searchValue, setSearchValue] = useState('');
  const filteredMovies = MOVIE_DATA.filter(movie => 
     movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // --- РЕНДЕРИНГ ---

  // Если не залогинен — рендерим только компонент Login
  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  // Если залогинен — показываем основной контент
  return (
    <div className="app-container">
      <Header /> 
      
      <main className="main-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div className="user-greeting">
               Привет, <b>{currentUser.name}</b>! 👋
            </div>
            <Button onClick={handleLogout}>Выйти</Button>
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