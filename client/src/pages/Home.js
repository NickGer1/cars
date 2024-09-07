import React from 'react';
import Header from './../components/Header';
import Car1 from './../img/car-1.jpg';
import Car2 from './../img/car-2.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <div class="about">
        <div class="container">
          <h2 class="about-title">О нашем клубе</h2>
          <div class="about-text">
            <p>Автомобильный клуб объединяет любителей и энтузиастов автомобилей, которые регулярно встречаются, чтобы обсудить последние новинки, поделиться опытом и принять участие в различных мероприятиях.</p>
            <p>Члены клуба организуют регулярные встречи, на которых они могут продемонстрировать свои автомобили, обменяться информацией и обсудить технические вопросы.</p>
            <p>Автомобильный клуб также проводит различные соревнования, такие как гонки, тест-драйвы и автомобильные шоу, где члены клуба могут показать свое мастерство вождения и познакомиться с новыми моделями.</p>
            <p>Помимо встреч и соревнований, клуб организует поездки и экскурсии, позволяющие членам клуба насладиться совместной поездкой и посетить интересные места.</p>
            <p>Членство в автомобильном клубе дает возможность получить доступ к эксклюзивной информации, специальным предложениям и скидкам, а также установить полезные связи с другими автолюбителями.</p>
          </div>
          <div class="about-pictures">
            <div class="about-pictures-item">
              <img src={Car1} alt="car" class="about-img" />
            </div>
            <div class="about-pictures-item">
              <img src={Car2} alt="car" class="about-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="news">
        <div class="container">
          <h2 class="news-title">Последние новости</h2>
          <div class="news-inner">
            <div class="news-item">
              <div class="news-item-text">
                1. Сможете угадать фильм по автомобилю? Давайте проверим
              </div>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                2. Дилер начал продавать обновленный Hyundai Tucson. Характеристики и цены
              </div>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                3. Больше половины автомасел в России — подделки. Что лить в двигатель
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="news">
        <div class="container">
          <h2 class="news-title">Последние события</h2>
          <div class="news-inner">
            <div class="news-item">
              <div class="news-item-text">
                1. Пограничный пункт пропуска на границе Эстонии Эстония запретила въезд автомобилям с белорусскими номерами
              </div>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                2. Латвия ввела запрет на въезд автомобилей с белорусскими номерами
              </div>
            </div>
            <div class="news-item">
              <div class="news-item-text">
                3. Продажи автомобилей Lada в ОАЭ могут начаться в этом году
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;