import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "/logo.svg"; // Импорт логотипа

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="COS CLINIC Logo" /> {/* Добавление логотипа */}
        <span>COS CLINIC</span>
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            ДОМАШНЯЯ СТРАНИЦА
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            УСЛУГИ
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            О НАС
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            КОНТАКТЫ
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
