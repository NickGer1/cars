import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    console.log(token);
    
    if (!token) {
      navigate('/login');
    } else {
      axios
        .get('http://localhost:5000/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          navigate('/login');
        });
    }
  }, [navigate]);

  if (loading) {
    return <p>Загрузка данных</p>;
  }

  return (
    <div>
      <Header />
      <div class="contacts">
        <div class="container">
          <h2 class="contacts-title">
            Профиль
          </h2>
          <div class="contacts-text">
            <p><strong>Логин:</strong> {user.login}</p>
            <p><strong>Роль в системе:</strong> {user.role === 'user' ? 'Пользователь' : 'Админ'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;