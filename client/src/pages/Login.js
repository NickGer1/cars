import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправляем запрос на сервер для входа
      const response = await axios.post('http://localhost:5000/api/login', {
        login,
        password
      });

      // Если успешный вход, то перенаправляем в личный кабинет
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/profile');
      } else {
        setError('Неверные данные');
      }
    } catch (error) {
      console.log(error);
      if (error.status === 400) {
        setError('Неверный логин или пароль');
      } else {
        setError('Ошибка при попытке входа');
      }
    }
  };

  return (
    <div>
      <Header />
      <div class="form">
        <div class="container">
          <div class="form-inner">
            <h2 class="form-title">
              Вход
            </h2>
            <form onSubmit={handleSubmit}>
              <div class="input-wrap">
                <label class="label">
                  Логин:
                </label>
                <input class="input" type="text" value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  required />
              </div>
              <div class="input-wrap">
                <label class="label">
                  Пароль:
                </label>
                <input class="input" type="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              </div>
              <button type="submit" class="form-btn btn btn-primary">Войти</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;