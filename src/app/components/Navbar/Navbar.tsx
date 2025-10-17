import React from "react";
import style from "./navbar.module.sass";
export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <a href="#home" className={style.logo}>
          LOGO
        </a>
        <div className={style.center}>
          <ul className={style.links} id="navLinks">
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <button className="menu-toggle" id="menuToggle">
          ☰
        </button>
      </div>
    </nav>
  );
};
