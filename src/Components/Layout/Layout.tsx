import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { useFavoritesSync } from '../../hooks/useFavoritesSync';
import styles from './Layout.module.css';

const Layout: FC = () => {
  useFavoritesSync();

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
