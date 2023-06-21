import { useState } from "react";
import styles from "./styles.module.scss";

export const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const [scroll, setScroll] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }

  return (
    <>
      <header
        className={`${styles.header} ${scroll ? styles.shrink : styles.normal}`}
      >
        <div className={styles.titleBox}>
          <h1 className={styles.titleBox__title}>NAVARRO</h1>
          <h2 className={styles.titleBox__subtitle}>
            Rehabilitación de Edificios
          </h2>
        </div>
        <nav className={styles.navigator}>
          <ul className={styles.navigator__list}>
            <li className={styles.navigator__list__item}>
              <a href="/">INICIO</a>
            </li>
            <li className={styles.navigator__list__item}>
              <a href="/nosotros">NOSOTROS</a>
            </li>
            <li className={styles.navigator__list__item}>
              <a href="/proyectos">PROYECTOS</a>
            </li>
            <li className={styles.navigator__list__item}>
              <a href="/contacto">CONTACTO</a>
            </li>
          </ul>
        </nav>

        <button
          className={`${styles.hamburger} ${
            hamburger ? styles.hamburger__open : ""
          }`}
          onClick={toggleHamburger}
        >
          <div className={styles.hamburger__line}></div>
          <div className={styles.hamburger__line}></div>
          <div className={styles.hamburger__line}></div>
        </button>
        <nav
          className={`${styles.responsiveMenu} ${
            hamburger && !scroll ? styles.responsiveMenu__open : ""
          } ${scroll && hamburger ? styles.responsiveMenu__scrolled : ""}`}
        >
          <ul className={styles.responsiveMenu__list}>
            <li className={styles.responsiveMenu__list__item}>
              <a href="/">INICIO</a>
            </li>
            <li className={styles.responsiveMenu__list__item}>
              <a href="/nosotros">NOSOTROS</a>
            </li>
            <li className={styles.responsiveMenu__list__item}>
              <a href="/proyectos">PROYECTOS</a>
            </li>
            <li className={styles.responsiveMenu__list__item}>
              <a href="/contacto">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
