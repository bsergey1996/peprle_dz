import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>

      {/* Меню */}
      <nav className={styles['header-nav']}>
        <a href="#" className={`${styles['nav-link']} ${styles.active}`}>Поиск фильмов</a>
        <a href="#" className={styles['nav-link']}>Мои фильмы <span className={styles.badge}>2</span></a>
      </nav>

      {/* Профиль */}
      <div className={styles['header-auth']}>
        <a href="#" className={styles['nav-link']}>Войти</a>
      </div>
    </header>
  );
};

export default Header;
