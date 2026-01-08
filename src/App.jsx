import { useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import SearchInput from './Components/SearchInput/SearchInput';
import Header from './Components/Header/Header';


function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    console.log('Поиск запущен с запросом:', searchValue);

  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <h1 className="title">Поиск</h1>
        <p className="description">
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </p>

        <div className="search-bar">
          <SearchInput 
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Введите название"
          />
          
          <Button onClick={handleSearchClick}>
            Искать
          </Button>
        </div>

        <div style={{marginTop: '20px', color: 'gray'}}>
           Текущий запрос: {searchValue}
        </div>
      </main>
    </div>
  );
}

export default App;