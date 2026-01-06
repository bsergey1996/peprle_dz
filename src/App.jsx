import React from 'react';
import './App.css';

import Button from './Components/Button/Button'
import SearchInput from './Components/SearchInput/SearchInput';
import Paragraph from './Components/Paragraph/Paragraph';

function App() {
  return (
    <div className="app-container">
      
      <h1 className="app-title">Поиск</h1>

      <div className="description-container">
        <Paragraph fontSize="16px">
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
      </div>

      <div className="search-section">
        <div className="search-input-container">
           <SearchInput placeholder="Введите название" />
        </div>
        
        <Button onClick={() => console.log('Клик!')}>
          Искать
        </Button>
      </div>

    </div>
  );
}

export default App;