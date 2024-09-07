import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Функция для выхода из аккаунта
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <header class="header">
      <nav class="header-nav">
        <ul class="header-list">
          <li class="header-list-item">
            <Link to='/' class="header-list-link">Главная</Link>
          </li>
          <li class="header-list-item">
            <Link to='/events' class="header-list-link">События</Link>
          </li>
          <li class="header-list-item">
            <Link to='/forum' class="header-list-link">Форум</Link>
          </li>
          <li class="header-list-item">
            <Link to='/contacts' class="header-list-link">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div class="header-btns">
        {isAuthenticated ? (
          <>
            <Link to='/profile' class="header-btn btn btn-primary">Личный кабинет</Link>
            <button onClick={handleLogout} class="header-btn btn btn-secondary">Выйти</button>
          </>
        ) : (
          <>
            <Link to='/login' class="header-btn btn btn-primary">Войти</Link>
            <Link to='/reg' class="header-btn btn btn-secondary">Регистрация</Link>
          </>
        )}
        
      </div>
    </header>
  );
};

export default Header;