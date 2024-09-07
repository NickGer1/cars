import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправляем запрос на сервер для входа
      const response = await axios.post('http://localhost:5000/api/reg', {
        login,
        password
      });

      // Если успешный вход, то перенаправляем в личный кабинет
      console.log(response);
      if (response.status === 201) {
        setSuccess('Вы успешно зарегистировались. Теперь войдите в свой аккаунт')
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError('Неверные данные');
      }
    } catch (error) {
      console.log('error fatal')
      console.log(error);
      if (error.status === 401) {
        setError('Пользователь уже существует');
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
              Регистрация
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
              <button type="submit" class="form-btn btn btn-primary">Зарегистироватсья</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;