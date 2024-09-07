import React from 'react';
import Header from './../components/Header';
import { Link } from 'react-router-dom';
import Car1 from './../img/car-1.jpg';
import Car2 from './../img/car-2.jpg';
import Car3 from './../img/car-3.png';

const Events = () => {
  return (
    <div>
      <Header />
      <div class="news">
        <div class="container">
          <h2 class="news-title">Предстоящие мероприятия</h2>
          <div class="news-inner">
            <div class="news-item">
              <div class="news-item-text">
                1. Сможете угадать фильм по автомобилю? Давайте проверим
              </div>
              <div class="news-item-date">09.10.2024</div>
              <Link to='/reg-event' class="news-item-link btn btn-primary">Зарегистрироваться</Link>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                2. Дилер начал продавать обновленный Hyundai Tucson. Характеристики и цены
              </div>
              <div class="news-item-date">15.10.2024</div>
              <Link to='/reg-event' class="news-item-link btn btn-primary">Зарегистрироваться</Link>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                3. Больше половины автомасел в России — подделки. Что лить в двигатель
              </div>
              <div class="news-item-date">21.10.2024</div>
              <Link to='/reg-event' class="news-item-link btn btn-primary">Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      </div>
      <div class="news">
        <div class="container">
          <h2 class="news-title">Информация о прошедших мероприятиях</h2>
          <div class="news-inner">
            <div class="news-item">
              <div class="news-item-text">
                Автовыстовка центр века
              </div>
              <div class="news-item-date">Дата проведения: 22 августа 2024г</div>
              <img src={Car1} alt="car" class="news-item-img" />
            </div>
            <div class="news-item">
              <div class="news-item-text">
                Деловой центр «Парк Хуамин» приглашает российских предпринимателей на встречу с представителями компаний из провинции Сычуань.
              </div>
              <div class="news-item-date">Дата проведения: 1 апреля 2024г</div>
              <img src={Car2} alt="car" class="news-item-img" />
            </div>
            <div class="news-item">
              <div class="news-item-text">
                Конференция в рамках MIMS Automobility Moscow на тему «Как найти новых партнеров среди поставщиков з/ч?»
              </div>
              <div class="news-item-date">Дата проведения: 29 августа 2024г</div>
              <img src={Car3} alt="car" class="news-item-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;