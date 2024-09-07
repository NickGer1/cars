import React from 'react';
import Header from '../components/Header';

const Contacts = () => {
  return (
    <div>
      <Header />
      <div class="contacts">
        <div class="container">
          <h2 class="contacts-title">
            Контактные данные
          </h2>
          <div class="contacts-text">
            Адрес: г. Санкт-Петербург, Витебский пр., 13, к. 13 <br></br>
            Телефон: (812) 33-22-000
          </div>
        </div>
      </div>
      <br /><br />
      <div class="form">
        <div class="container">
          <div class="form-inner">
            <h2 class="form-title">
              Обратная связь
            </h2>
            <form action='/'>
              <div class="input-wrap">
                <label class="label">
                  Ваше имя
                </label>
                <input class="input" type="text"
                  required />
              </div>
              <div class="input-wrap">
                <label class="label">
                  Ваш вопрос
                </label>
                <input class="input" type="password"
                  required />
              </div>
              <button type="submit" class="form-btn btn btn-primary">Отправить вопрос</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;