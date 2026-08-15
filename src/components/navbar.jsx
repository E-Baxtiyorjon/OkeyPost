
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/Лого.png" alt="OkeyPost" />
        </Link>

        <div className="navbar-links">
          <NavLink to="/how" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Как покупать
          </NavLink>
          <NavLink to="/sales" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Распродажи
          </NavLink>
          <NavLink to="/prices" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Цены
          </NavLink>
          <NavLink to="/help" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Помощь
          </NavLink>
          <NavLink to="/bonuses" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Бонусы
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Блог
          </NavLink>
          <NavLink to="/shops" className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}>
            Магазины
          </NavLink>
        </div>

        <div className="navbar-actions">
          <button className="navbar-login">Вход</button>
          <button className="primary-btn">Связаться с нами</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;