import './Header.css';

const Header = () => {
  return (
    <header className="header">

      {/* Меню */}
      <nav className="header-nav">
        <a href="#" className="nav-link active">Поиск фильмов</a>
        <a href="#" className="nav-link">Мои фильмы <span className="badge">2</span></a>
      </nav>

      {/* Профиль */}
      <div className="header-auth">
        <a href="#" className="nav-link">Войти</a>
      </div>
    </header>
  );
};

export default Header;