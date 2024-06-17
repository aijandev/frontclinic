import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/procedure.jpg" alt="procedure" />
      <div className="item">
        <h3>БУДЬТЕ ЛУЧШЕЙ ВЕРСИЕЙ СЕБЯ</h3>
        <div>
          <h1>ВАШ ПУТЬ К СОВЕРШЕНСТВУ НАЧИНАЕТСЯ ЗДЕСЬ</h1>
          <p>
          Добро пожаловать в COS CLINIC, где мы поможем <br/>вам раскрыть вашу природную красоту с помощью передовых технологий <br/>и высококвалифицированных специалистов.<br/>Воплощаем ваши мечты в РЕАЛЬНОСТЬ!<br/>   
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            ЗАПИСАТЬСЯ НА ПРИЕМ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;