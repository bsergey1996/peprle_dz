import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useUser } from '../../context/UserContext';
import Button from '../Button/Button';
import { selectFavoriteCount } from '../../store/favoritesSlice';
import styles from './Header.module.css';

const Header: FC = () => {
  const { currentUser, logout } = useUser();
  const favoriteCount = useSelector(selectFavoriteCount);

  return (
    <header className={styles.header}>

      {/* Меню */}
      <nav className={styles['header-nav']}>
        <NavLink 
          to="/" 
          className={({ isActive }) => `${styles['nav-link']} ${isActive ? styles.active : ''}`}
        >
          Поиск фильмов
        </NavLink>
        <NavLink 
          to="/favorites" 
          className={({ isActive }) => `${styles['nav-link']} ${isActive ? styles.active : ''}`}
        >
          Мои фильмы <span className={styles.badge}>{favoriteCount}</span>
        </NavLink>
      </nav>

      {/* Профиль */}
      <div className={styles['header-auth']}>
        {currentUser ? (
          <>
            <span className={styles['user-name']}>Привет, {currentUser.name}!</span>
            <Button onClick={logout}>Выйти</Button>
          </>
        ) : (
          <NavLink 
            to="/login"
            className={({ isActive }) => `${styles['nav-link']} ${isActive ? styles.active : ''}`}
          >
            Войти
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
