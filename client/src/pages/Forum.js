import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Car3 from './../img/car-3.png';

const Forum = () => {
  return (
    <div>
      <Header />
      <div class="news">
        <div class="container">
          <h2 class="news-title">Темы для обсуждения</h2>
          <input class="news-search input" placeholder="Поиск по форуму" />
          <div class="news-inner">
            <div class="news-item">
              <div class="news-item-text">
                1. Сможете угадать фильм по автомобилю? Давайте проверим
              </div>
              <div class="news-item-date">09.10.2024</div>
              <Link to='/' class="news-item-link btn btn-primary">Посмотреть ответы</Link>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                2. Дилер начал продавать обновленный Hyundai Tucson. Характеристики и цены
              </div>
              <div class="news-item-date">15.10.2024</div>
              <Link to='/' class="news-item-link btn btn-primary">Посмотреть ответы</Link>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                3. Больше половины автомасел в России — подделки. Что лить в двигатель
              </div>
              <div class="news-item-date">21.10.2024</div>
              <Link to='/' class="news-item-link btn btn-primary">Посмотреть ответы</Link>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                1. Сможете угадать фильм по автомобилю? Давайте проверим
              </div>
              <div class="news-item-date">09.10.2024</div>
              <Link to='/' class="news-item-link btn btn-primary">Посмотреть ответы</Link>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                2. Дилер начал продавать обновленный Hyundai Tucson. Характеристики и цены
              </div>
              <div class="news-item-date">15.10.2024</div>
              <Link to='/' class="news-item-link btn btn-primary">Посмотреть ответы</Link>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                3. Больше половины автомасел в России — подделки. Что лить в двигатель
              </div>
              <div class="news-item-date">21.10.2024</div>
              <Link to='/' class="news-item-link btn btn-primary">Посмотреть ответы</Link>
            </div>
          </div>
          <div class="news-btn-wrap">
            <Link to='/' class="news-btn btn btn-secondary">Создать тему</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;