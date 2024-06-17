import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>COS CLINIC</h1>
          <p>Косметологическая клиника</p>
        </div>
        <div className="tag">
          <label>Новостная рассылка</label>
          <div>
            <input type="text" placeholder="E-mail" />
            <button>Подписаться</button>
          </div>
          <p>Зарегистрируйтесь с помощью электронной почты
            чтобы получать новости и обновления
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;