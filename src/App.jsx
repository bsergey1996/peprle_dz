import React, { useState } from 'react'; // useLocalStorage здесь больше не нужен!
import styles from './App.module.css';
import Input from './Components/Input/Input';
import { useUser } from './context/UserContext'; // Импортируем наш хук

function App() {
  // 1. Достаем данные и функции из Глобального Контекста
  const { currentUser, login, logout } = useUser();
  
  // Локальный стейт только для инпута (это нормально, это UI-стейт)
  const [inputValue, setInputValue] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Вызываем глобальную функцию входа
    login(inputValue);
    setInputValue('');
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.logo}>MovieApp</div>
        
        {/* Проверяем, есть ли юзер в контексте */}
        {currentUser && (
            <div className={styles.userMenu}>
                <span>Привет, {currentUser.name}!</span>
                <button onClick={logout}>Выйти</button>
            </div>
        )}
      </header>

      <main className={styles.main}>
        {!currentUser ? (
          <form onSubmit={handleLogin} className={styles.loginForm}>
             <h2>Вход</h2>
             <Input 
                type="text" 
                placeholder="Введите имя"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
             />
             <button type="submit">Войти</button>
          </form>
        ) : (
          <div className={styles.content}>
             <h1>Список фильмов</h1>
             {/* Тут уже можно показывать список */}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;